import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Moment } from './moment';
import { MomentsService } from './moments.service';

@Controller('moments')
export class MomentsController {
  constructor(private momentsService: MomentsService) {}

  /**
   * Get all moments
   * @returns all moments
   */
  @Get()
  getMoments(): Moment[] {
    return this.momentsService.getMoments();
  }

  /**
   * Get moment by id
   * @param id
   * @returns moment
   */
  @Get(':id')
  getMomentById(@Param('id') id: string): Moment {
    return this.momentsService.getMomentById(id);
  }

  /**
   * Create a new moment
   * @param moment
   * @returns created moment
   */
  @Post()
  createMoment(@Body() moment: Moment): Moment {
    return this.momentsService.createMoment(moment);
  }

  /**
   * Update a moment
   * @param id
   * @param moment
   * @returns updated moment
   */
  @Put(':id')
  updateMoment(@Param('id') id: string, @Body() moment: Moment): Moment {
    return this.momentsService.updateMoment(id, moment);
  }

  /**
   * Delete a moment
   * @param id
   * @returns deleted moment
   */
  @Delete(':id')
  deleteMoment(@Param('id') id: string): Moment {
    return this.momentsService.deleteMoment(id);
  }
}
