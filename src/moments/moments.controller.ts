import { Controller, Get, Param } from '@nestjs/common';
import { Moment } from './moment';
import { MomentsService } from './moments.service';

@Controller('moments')
export class MomentsController {
  constructor(private momentsService: MomentsService) {}

  @Get()
  getMoments(): Moment[] {
    return this.momentsService.getMoments();
  }

  @Get(':id')
  getMomentById(@Param('id') id: string): Moment {
    return this.momentsService.getMomentById(id);
  }
}
