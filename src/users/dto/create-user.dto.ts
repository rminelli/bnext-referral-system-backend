import { IsMobilePhone, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly userName: string;

  @IsNotEmpty()
  @IsMobilePhone('es-ES')
  readonly phoneNumber: number;
}
