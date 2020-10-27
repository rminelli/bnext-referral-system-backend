import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { VerifyPhoneNumber } from '../common/verifyphonenumber.common';
@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    private verifyPhoneNumber: VerifyPhoneNumber,
  ) {}
  async create(id: number, createContactDtos: CreateContactDto[]) {
    try {
      createContactDtos.forEach(
        async (value: CreateContactDto): Promise<CreateContactDto> => {
          const newContact = new Contact();
          const {
            isValidPhoneNumer,
            phoneMetaData,
          } = await this.verifyPhoneNumber.verify(value);
          newContact.contactName = value.contactName;
          newContact.phone = value.phone;
          newContact.user = id;
          newContact.isValidPhoneNumer = isValidPhoneNumer;
          newContact.phoneMetaData = phoneMetaData;
          return await this.contactRepository.save(newContact);
        },
      );
      return 'Contacts created';
    } catch (error) {
      return error.message;
    }
  }

  async findAll(userId: number) {
    try {
      return await this.contactRepository
        .createQueryBuilder('contacts')
        .where('contacts.user = :id', { id: userId })
        .getMany();
    } catch (error) {
      return error.message;
    }
  }
  async commonContacts(userId1: number, userId2: number): Promise<Contact[]> {
    try {
      return await this.contactRepository.query(`select distinct 
      contact01.contactName,
      contact01.phone,
      contact01.isValidPhoneNumer, 
      contact01.phoneMetaData 
          from contact contact01 join contact contact02
      on contact01.phone = contact02.phone 
      where contact01.userId = ${userId1} and contact02.userId = ${userId2}`);
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    try {
      return await this.contactRepository.update(id, updateContactDto);
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.contactRepository.delete(id);
    } catch (error) {
      return error.message;
    }
  }
}
