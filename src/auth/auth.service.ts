import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService
  ) { }

  async signIn(userId: string): Promise<{ accessToken: string }> {

    const payload: JwtPayload = { sub: userId }
    const accessToken = this.jwtService.sign(payload)

    return { accessToken }
  }
}
