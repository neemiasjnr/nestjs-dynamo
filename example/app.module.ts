import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from 'nestjs-dynamo';
import { UserService } from './user/user.service';

@Module({
  imports: [DatabaseModule.register(), UserModule],
  providers: [UserService],
})
export class AppModule {}
