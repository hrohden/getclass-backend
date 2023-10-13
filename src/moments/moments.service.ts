import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Moment } from './entities/moment.entity';

@Injectable()
export class MomentsService {
  moments: Moment[] = [
    {
      id: uuidv4(),
      title: '(🖥️) Trip to NYC',
      headline: 'My trip to NY with my wife',
      description:
        'It was an amazing trip! Many places to take pictures and visit!',
      isFavorite: false,
    },
    {
      id: uuidv4(),
      title: '(🖥️) Trip to Europe',
      headline: 'My trip to Europe with my wife in 2014',
      description:
        'This trip was when we were waiting for Lucas. Many pictures and great moments.',
      isFavorite: false,
    },
  ];

  create(moment: Moment) {
    const newMoment: Moment = {
      id: uuidv4(),
      ...moment,
    };
    this.moments.push(newMoment);
    return newMoment;
  }

  findAll() {
    return this.moments;
  }

  findOne(id: string) {
    return this.moments.find((moment) => moment.id === id);
  }

  update(id: string, moment: Moment) {
    const momentIndex = this.moments.findIndex((moment) => moment.id === id);
    if (momentIndex < 0) {
      throw new Error('Moment not found');
    }
    this.moments[momentIndex] = {
      id,
      ...moment,
    };
    return this.moments[momentIndex];
  }

  remove(id: string) {
    const momentIndex = this.moments.findIndex((moment) => moment.id === id);
    if (momentIndex < 0) {
      throw new Error('Moment not found');
    }
    const deletedMoment = this.moments[momentIndex];
    this.moments.splice(momentIndex, 1);
    return deletedMoment;
  }
}
