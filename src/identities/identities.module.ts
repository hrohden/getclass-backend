import { Module } from '@nestjs/common';
import { IdentitiesController } from './identities.controller';
import { IdentitiesService } from './identities.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [IdentitiesController],
  providers: [IdentitiesService, PrismaService],
  exports: [IdentitiesService],
})
export class IdentitiesModule {}
