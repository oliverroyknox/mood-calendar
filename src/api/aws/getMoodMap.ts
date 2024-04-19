import {
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { MoodMap } from "@custom-types/mood";
import camelCase from "camelcase-keys";
import { CamelCasedProperties } from "type-fest";

import { client } from "./client";

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
