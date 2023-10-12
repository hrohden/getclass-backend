import { Injectable } from '@nestjs/common';
import { Moment } from 'src/moments/moment';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MomentsService {
  moments = [
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

  getMoments(): Moment[] {
    return this.moments;
  }

  /**
   * Get moment by id
   */
  getMomentById(id: string): Moment {
    return this.moments.find((moment) => moment.id === id);
  }
}
