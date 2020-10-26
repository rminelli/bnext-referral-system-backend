import { IsMobilePhone, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({ example: '+34617882211' })
  @IsNotEmpty()
  @IsMobilePhone()
  readonly phone: number;
}
