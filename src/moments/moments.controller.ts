import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Public } from 'src/authentication/public.decorator';
import { Moment } from './entities/moment.entity';
import { MomentsService } from './moments.service';

@Controller('moments')
export class MomentsController {
  constructor(private readonly momentsService: MomentsService) {}

  @Post()
  @Public()
  create(@Body() moment: Moment) {
    return this.momentsService.create(moment);
  }

  @Get()
  @Public()
  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MomentWhereUniqueInput;
    where?: Prisma.MomentWhereInput;
    orderBy?: Prisma.MomentOrderByWithRelationInput;
  }) {
    return this.momentsService.findAll(params);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.momentsService.findOne(id);
  }

  @Patch(':id')
  @Public()
  update(@Param('id') id: string, @Body() moment: Moment) {
    return this.momentsService.update(id, moment);
  }

  @Delete(':id')
  @Public()
  remove(@Param('id') id: string) {
    return this.momentsService.remove(id);
  }
}
