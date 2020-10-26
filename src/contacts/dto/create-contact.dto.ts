import { IsMobilePhone, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly contactName: string;

  @ApiProperty({ example: '+34617000001' })
  @IsNotEmpty()
  @IsMobilePhone('es-ES')
  readonly phone: number;

  isValidPhoneNumer: boolean;

  phoneMetaData: string;
}
