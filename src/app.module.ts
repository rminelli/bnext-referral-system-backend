import { HttpModule, Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    ContactsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    HttpModule,
    Logger,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
