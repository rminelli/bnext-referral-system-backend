import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Contact } from '../../contacts/entities/contact.entity';

@Entity()
export class User {
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
  name: string;
  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column('bigint')
  phone: number;

  @OneToMany(
    () => Contact,
    contact => contact.user,
  )
  contacts: Contact[];
}
