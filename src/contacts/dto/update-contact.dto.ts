import { PartialType } from '@nestjs/mapped-types';
import { IsMobilePhone } from 'class-validator';
import { CreateContactDto } from './create-contact.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty()
  readonly contactName: string;

  @ApiProperty({ example: '+34617000001' })
  @IsMobilePhone()
  readonly phone: number;

  readonly isValidPhoneNumer: boolean;

  readonly phoneMetaData: string;
}
