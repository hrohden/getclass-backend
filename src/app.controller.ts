import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './authentication/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  @Public()
  ping() {
    return {
      message: 'pong',
    };
  }
}
