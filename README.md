# Mood Calendar

![Mood calendar icon](public/mood-calendar.png)

[mood-calendar.knox.uk.com](https://mood-calendar.knox.uk.com)

## Description

A calendar to track your mood over time.

The app is built on a custom calendar component, using `moment` to handle date parsing and validation, with [AWS DynamoDB](https://aws.amazon.com/dynamodb) and [Auth0](https://auth0.com) integration.

## Scripts

_The following scripts are available in [package.json](./package.json)_

**To start the application**

```bash
npm run dev
```

**To build the application**

```bash
npm run build
```

Builds a minified bundle for production.
Requires environment variables to be set

- `VITE_AWS_ACCESS_KEY_ID`
- `VITE_AWS_SECRET_ACCESS_KEY`
- `VITE_AUTH0_CLIENT_ID`
- `VITE_AUTH0_DOMAIN`

**To manually deploy the application to an S3 bucket**

```bash
npm run deploy
```

Requires AWS credentials to be set

- `AWS_SECRET_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

**To invalidate the CloudFront distribution**

```bash
npm run invalidate
```

After uploading new artifacts to S3, the CloudFront distribution needs to be invalidated in order for the latest changes to be served.

## Changes

Pushing to main will run a custom [GitHub action](.github/workflows/main.yml) to build the application, deploy it to S3 and invalidate the CloudFront distribution.
