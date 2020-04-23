import { Inject, Injectable } from '@nestjs/common';
import {
  DYNAMO_CONNECTION,
  DynamoClient,
  attribute,
  hashKey,
  table,
} from 'nestjs-dynamo';

// https://github.com/awslabs/dynamodb-data-mapper-js
@table('table-name')
export class UserModel {
  @hashKey()
  email?: string;

  @attribute()
  address?: string;

  @attribute()
  age?: string;

  @attribute()
  firstName?: string;

  @attribute()
  lastName?: string;
}

@Injectable()
export class UserService {
  constructor(@Inject(DYNAMO_CONNECTION) private readonly db: DynamoClient) {}

  getUser(email: string): Promise<UserModel> {
    const user = new UserModel();
    Object.assign(user, { email });
    return this.db.get(user);
  }
}
