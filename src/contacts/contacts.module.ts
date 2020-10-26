import { HttpModule, Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { Contact } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerifyPhoneNumber } from '../common/verifyphonenumber.common';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]), HttpModule],
  controllers: [ContactsController],
  providers: [ContactsService, VerifyPhoneNumber],
})
export class ContactsModule {}
