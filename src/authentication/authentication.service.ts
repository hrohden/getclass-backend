import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IdentitiesService } from 'src/identities/identities.service';
import { Authentication } from './entities/authentication.entity';
import { LoginForm } from './entities/loginForm.entity';

@Injectable()
export class AuthenticationService {
  constructor(
    private identitiesService: IdentitiesService,
    private jwtService: JwtService,
  ) {}
  async signIn(authentication: LoginForm): Promise<Authentication> {
    const identity = await this.identitiesService.findOne(
      authentication.username,
    );
    const passwordMatches = await bcrypt.compare(
      authentication.password,
      identity.password,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: identity.id, username: identity.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      username: identity.username,
    };
  }
}
