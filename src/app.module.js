import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/controllers/user/user.controller';
import { UserService } from './users/services/user/user.service';
import { UsersModule } from './users/users.module';
import { userProviders } from './providers/users/user.providers';
import { DatabaseModule } from './database.module';
@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, ...userProviders],
})
export class AppModule {}
