import { Body, Controller, Post } from '@nestjs/common';
import { UserService, UserSignInData } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('signin')
  async signIn(@Body() body: UserSignInData) {
    return await this.userService.signIn(body)
  }
}
