import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @ApiProperty()
  @Column()
  contactName: string;

  @ApiProperty({ example: '+34617000001' })
  @Column('bigint')
  phone: number;

  @ApiProperty()
  @Column({ default: false })
  isValidPhoneNumer: boolean;

  @ApiProperty()
  @Column('longtext')
  phoneMetaData: string;

  @ApiProperty()
  @ManyToOne(
    () => User,
    user => user.contacts,
  )
  user: number;
}
