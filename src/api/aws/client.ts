import { DynamoDB } from "@aws-sdk/client-dynamodb";

export const client = new DynamoDB({
  region: "eu-west-2",
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});
