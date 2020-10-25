import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Welcome to Bnext Referral Systeam Backend API';
  }
}
