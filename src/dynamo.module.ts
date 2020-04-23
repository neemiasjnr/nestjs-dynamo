import { DynamicModule, Global, Module } from '@nestjs/common';
import { DynamoService } from './dynamo.service';
import { DynamoOptions, IDynamoService } from './dynamo.interface';
import { DYNAMO_CONNECTION, DYNAMO_OPTIONS } from './dynamo';

export const connectionFactory = {
  provide: DYNAMO_CONNECTION,
  useFactory: async (dynamoService: IDynamoService) => {
    return dynamoService.connect();
  },
  inject: [DynamoService],
};

@Global()
@Module({})
export class DatabaseModule {
  public static register(options?: DynamoOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: DYNAMO_OPTIONS,
          useValue: options || {},
        },
        connectionFactory,
        DynamoService,
      ],
      exports: [DynamoService, connectionFactory],
    };
  }
}
