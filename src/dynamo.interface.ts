import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');

export type DynamoOptions = DynamoDB.Types.ClientConfiguration;

export interface IDynamoService {
  connect(): Promise<any>;
}

export type DynamoClient = DataMapper;
