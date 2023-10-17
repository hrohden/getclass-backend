import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IdentitiesService } from 'src/identities/identities.service';
import { Authentication } from './entities/authentication.entity';
import { AuthenticationToken } from './entities/authenticationToken.entity';

@Injectable()
export class AuthenticationService {
  constructor(
    private identitiesService: IdentitiesService,
    private jwtService: JwtService,
  ) {}
  async signIn(authentication: Authentication): Promise<AuthenticationToken> {
    const user = await this.identitiesService.findOne(authentication.username);
    const passwordMatches = await bcrypt.compare(
      authentication.password,
      user.password,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
