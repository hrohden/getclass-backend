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
import { LoginForm } from './entities/loginForm.entity';
import { Public } from './public.decorator';

@Controller('login')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post()
  @Public()
  signIn(@Body() loginForm: LoginForm) {
    return this.authenticationService.signIn(loginForm);
  }

  @UseGuards(AuthenticationGuard)
  @Get('profile')
  getProfile(@Request() request) {
    return request['user'];
  }
}
