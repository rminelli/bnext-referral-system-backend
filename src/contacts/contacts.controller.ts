import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseArrayPipe,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @ApiOperation({ summary: 'Create user contacts' })
  @ApiBody({ type: [CreateContactDto] })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Contact,
  })
  @Post(':id')
  async create(
    @Param('id') id: number,
    @Body(new ParseArrayPipe({ items: CreateContactDto }))
    createContactDtos: CreateContactDto[],
  ) {
    return await this.contactsService.create(id, createContactDtos);
  }

  @ApiOperation({ summary: 'Get all contacts of a user' })
  @ApiResponse({
    status: 200,
    description: 'Found contacts',
    type: Contact,
  })
  @Get(':userId')
  async findAll(@Param('userId') userId: number) {
    return await this.contactsService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Get the common contacts registered between two users',
  })
  @ApiResponse({
    status: 200,
    description: 'Found contacts',
    type: [Contact],
  })
  @Get('/:userId1/:userId2')
  async commonContacts(
    @Param('userId1') userId1: number,
    @Param('userId2') userId2: number,
  ) {
    return await this.contactsService.commonContacts(userId1, userId2);
  }

  @ApiOperation({ summary: 'Update contact' })
  @ApiResponse({
    status: 200,
    description: 'Update contact',
    type: Contact,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return await this.contactsService.update(+id, updateContactDto);
  }

  @ApiOperation({ summary: 'Delete contact' })
  @ApiResponse({
    status: 200,
    description: 'Contact deleted',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contactsService.remove(+id);
  }
}
