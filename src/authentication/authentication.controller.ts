import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';
import { Authentication } from './entities/authentication.entity';

@Controller('login')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post()
  signIn(@Body() authentication: Authentication) {
    return this.authenticationService.signIn(authentication);
  }

  @UseGuards(AuthenticationGuard)
  @Get('profile')
  getProfile(@Request() request) {
    return request['user'];
  }
}
