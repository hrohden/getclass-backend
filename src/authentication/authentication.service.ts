import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Authentication } from './entities/authentication.entity';

@Injectable()
export class AuthenticationService {
  constructor(private usersService: UsersService) {}
  async signIn(authentication: Authentication) {
    const user = await this.usersService.findOne(authentication.username);

    if (user.password !== authentication.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    // TODO: return JWT here instead of user

    return result;
  }
}
