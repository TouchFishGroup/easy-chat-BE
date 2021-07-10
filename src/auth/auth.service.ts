import { Injectable } from '@nestjs/common';
import { AccountInfo } from './auth.model';

@Injectable()
export class AuthService {
  private accountInfo: AccountInfo = {
    name: 'Jack',
    avatarImg: 'https://avatars.githubusercontent.com/u/57585556?v=4',
  };
  getAccountInformation() {
    return this.accountInfo;
  }
  updataAccountInformation(name: string, avatarImg: string) {
    this.accountInfo.name = name;
    this.accountInfo.avatarImg = avatarImg;
    return this.accountInfo;
  }
}
