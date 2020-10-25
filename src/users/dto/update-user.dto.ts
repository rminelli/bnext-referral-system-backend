import { PartialType } from '@nestjs/mapped-types';
import { IsMobilePhone } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly userName: string;

  @IsMobilePhone('es-ES')
  readonly phoneNumber: number;
}
