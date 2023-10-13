import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MomentsController } from './moments.controller';
import { MomentsService } from './moments.service';

@Module({
  controllers: [MomentsController],
  providers: [MomentsService, PrismaService],
})
export class MomentsModule {}
