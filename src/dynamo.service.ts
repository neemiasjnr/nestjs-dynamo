import { Inject, Injectable } from '@nestjs/common';
import DynamoDB = require('aws-sdk/clients/dynamodb');

import { DataMapper } from '@aws/dynamodb-data-mapper';
import { DatabaseModuleOptions, IDatabaseService } from './dynamo.interface';
import { DYNAMO_OPTIONS } from './dynamo';

@Injectable()
export class DynamoService implements IDatabaseService {
  constructor(@Inject(DYNAMO_OPTIONS) private options: DatabaseModuleOptions) {}

  async connect(): Promise<DataMapper> {
    const client = new DynamoDB(this.options);
    return new DataMapper({ client });
  }
}
