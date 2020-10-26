import { PartialType } from '@nestjs/mapped-types';
import { IsMobilePhone } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty({ example: '+34617000001' })
  @IsMobilePhone()
  readonly phone: number;
}
