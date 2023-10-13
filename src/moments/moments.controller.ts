import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Moment } from './entities/moment.entity';
import { MomentsService } from './moments.service';

@Controller('moments')
export class MomentsController {
  constructor(private readonly momentsService: MomentsService) {}

  @Post()
  create(@Body() moment: Moment) {
    return this.momentsService.create(moment);
  }

  @Get()
  findAll() {
    return this.momentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.momentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() moment: Moment) {
    return this.momentsService.update(id, moment);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.momentsService.remove(id);
  }
}
