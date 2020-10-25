import { PartialType } from '@nestjs/mapped-types';
import { IsMobilePhone } from 'class-validator';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  readonly contactName: string;

  @IsMobilePhone('es-ES')
  readonly phoneNumber: number;
}
