import { IsMobilePhone, IsNotEmpty } from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class CreateContactDto {
  @IsNotEmpty()
  readonly contactName: string;

  @IsNotEmpty()
  @IsMobilePhone('es-ES')
  readonly phoneNumber: number;
  @IsNotEmpty()
  readonly user: User;
}
