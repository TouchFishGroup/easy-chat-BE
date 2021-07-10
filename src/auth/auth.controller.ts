import { Body, Controller, Get, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  getAccountInformation() {
    return this.authService.getAccountInformation();
  }
  @Patch()
  updataAccountInformation(
    @Body('name') name: string,
    // eslint-disable-next-line prettier/prettier
    @Body('avatarImg') avatarImg: string
  ) {
    return this.authService.updataAccountInformation(name, avatarImg);
  }
}
