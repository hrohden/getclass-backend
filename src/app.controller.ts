import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './authentication/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  @Public()
  getHealthCheck() {
    return {
      message: 'Hello World!',
      version: '1.0.0',
    };
  }
}
