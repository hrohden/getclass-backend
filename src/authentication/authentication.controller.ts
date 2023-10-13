import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { Authentication } from './entities/authentication.entity';

@Controller('login')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post()
  signIn(@Body() authentication: Authentication) {
    return this.authenticationService.signIn(authentication);
  }
}
