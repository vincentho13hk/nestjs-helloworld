import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {

  constructor(
    private readonly authService: AuthService,
  ) { }

  private async getToken(userId: string) {
    return await this.authService.signIn(userId)
  }

  async signIn(body: UserSignInData): Promise<string> {
    const token = await this.getToken(body.userId)
    return token.accessToken
  }
}

export class UserSignInData {
  @ApiProperty({ description: 'Firebase OAuth Id' })
  userId: string
}