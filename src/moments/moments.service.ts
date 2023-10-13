import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { Moment } from './entities/moment.entity';

@Injectable()
export class MomentsService {
  constructor(private prisma: PrismaService) {}

  create(moment: Moment) {
    const data: Moment = {
      id: uuidv4(),
      ...moment,
    };
    return this.prisma.moment.create({ data });
  }

  findAll() {
    return this.prisma.moment.findMany();
  }

  findOne(id: string) {
    return this.prisma.moment.findUnique({ where: { id } });
  }

  update(id: string, data: Moment) {
    return this.prisma.moment.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.moment.delete({ where: { id } });
  }
}
