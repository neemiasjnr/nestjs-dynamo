import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');

export type DynamoOptions = DynamoDB.Types.ClientConfiguration;

export type DynamoClient = DataMapper;

export interface IDynamoService {
  connect(): Promise<DataMapper>;
}
