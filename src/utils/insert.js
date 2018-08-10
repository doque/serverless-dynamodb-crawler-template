import uuid from 'uuid';
import dynamoDb from './dynamodb';

const insert = item =>
  dynamoDb
    .put({
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid(),
        ...item
      }
    })
    .promise();

export default insert;
