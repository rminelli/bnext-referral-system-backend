import { HttpService, Injectable, Logger } from '@nestjs/common';

import { CreateContactDto } from '../contacts/dto/create-contact.dto';

@Injectable()
export class VerifyPhoneNumber {
  constructor(private httpService: HttpService) {}

  async verify(createContactDto: CreateContactDto): Promise<CreateContactDto> {
    const logger = new Logger(VerifyPhoneNumber.name);
    const URL = process.env['PHONE_VALIDATE_SERVICE'];
    const USER_ID = process.env['PHONE_VALIDATE_SERVICE_USER_ID'];
    const MASTER_KEY = process.env['PHONE_VALIDATE_SERVICE_MASTER_KEY'];
    const headers = { 'user-id': USER_ID, 'api-key': MASTER_KEY };
    try {
      const params = { number: `${createContactDto.phone}` };
      const response: any = await this.httpService
        .get(`${URL}`, { headers, params })
        .toPromise();
      createContactDto.isValidPhoneNumer = response.data.valid;
      createContactDto.phoneMetaData = JSON.stringify(response.data);
      return createContactDto;
    } catch (error) {
      createContactDto.isValidPhoneNumer = false;
      createContactDto.phoneMetaData = 'Failed to obtain phone data';
      logger.debug({
        message: error.message,
        data: error.response.data,
      });
      return createContactDto;
    }
  }
}
