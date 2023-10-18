import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IdentitiesService {
  constructor(private prismaService: PrismaService) {}

  async findOne(username: string) {
    return this.prismaService.identity.findFirst({ where: { username } });
  }
}
