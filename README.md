# serverless-crawler

Crawls data from sites and stores them in a DynamoDB
table.

Requires JRE (8 or greater)!

## Setup

```sh
yarn
yarn add -g serverless
yarn add -g dynamodb-admin

# Start local dynamodb
sls dynamodb install
sls dyanmodb start

# Run everything in offline mode with local DB
sls offline start

# View dynamoDB tables (defaults to instance on localhost:8000)
dynamodb-admin
```
