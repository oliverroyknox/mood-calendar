import { PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import type { MoodMap } from "@custom-types/mood";

import { client } from "./client";

export async function putMoodMap(map: MoodMap) {
  const input: PutItemCommandInput = {
    TableName: "mood-calendar",
    Item: marshall(map),
  };

  const putItemCommand = new PutItemCommand(input);

  return client.send(putItemCommand);
}
