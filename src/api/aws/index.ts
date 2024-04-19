import {
  DynamoDB,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  PutItemCommand,
  PutItemCommandInput,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { MoodMap } from "@custom-types/mood";
import camelCase from "camelcase-keys";
import { CamelCasedProperties } from "type-fest";

export const client = new DynamoDB({
  region: "eu-west-2",
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

export async function getMoodMap(year: MoodMap["year"]) {
  const input: GetItemCommandInput = {
    TableName: "mood-calendar",
    Key: marshall({ year }),
  };

  const getItemCommand = new GetItemCommand(input);

  return client
    .send(getItemCommand)
    .then((response) => {
      return camelCase(
        response as never
      ) as CamelCasedProperties<GetItemCommandOutput>;
    })
    .then((response) => {
      return {
        ...response,
        item: response.item
          ? (unmarshall(response.item) as MoodMap)
          : undefined,
      };
    });
}

export async function putMoodMap(map: MoodMap) {
  const input: PutItemCommandInput = {
    TableName: "mood-calendar",
    Item: marshall(map),
  };

  const putItemCommand = new PutItemCommand(input);

  return client.send(putItemCommand);
}
