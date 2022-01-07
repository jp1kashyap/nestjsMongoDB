import { Module } from '@nestjs/common';
import { databaseProivders } from './providers/database.providers';

@Module({
  providers: [...databaseProivders],
  exports: [...databaseProivders],
})
export class DatabaseModule {}
