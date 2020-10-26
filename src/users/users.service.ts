import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = new User();
      newUser.name = createUserDto.name;
      newUser.lastName = createUserDto.lastName;
      newUser.phone = createUserDto.phone;
      return await this.usersRepository.save(newUser);
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.usersRepository.findOne(id);
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.usersRepository.update(id, updateUserDto);
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.usersRepository.delete(id);
    } catch (error) {
      return error.message;
    }
  }
}
