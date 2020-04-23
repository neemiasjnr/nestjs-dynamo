import { Inject, Injectable } from '@nestjs/common';
import DynamoDB = require('aws-sdk/clients/dynamodb');
import { DataMapper } from '@aws/dynamodb-data-mapper';
import { DynamoOptions, IDynamoService } from './dynamo.interface';
import { DYNAMO_OPTIONS } from './constants';

@Injectable()
export class DynamoService implements IDynamoService {
  constructor(@Inject(DYNAMO_OPTIONS) private options: DynamoOptions) {}

  async connect(): Promise<DataMapper> {
    const client = new DynamoDB(this.options);
    return new DataMapper({ client });
  }
}
