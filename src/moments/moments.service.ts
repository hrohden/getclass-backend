import { Injectable } from '@nestjs/common';
import { Moment } from 'src/moments/moment';
import { v4 as uuidv4 } from 'uuid';

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

  getMoments(): Moment[] {
    return this.moments;
  }

  /**
   * Get moment by id
   */
  getMomentById(id: string): Moment {
    return this.moments.find((moment) => moment.id === id);
  }

  /**
   * Create a new moment
   */
  createMoment(moment: Moment): Moment {
    const newMoment: Moment = {
      id: uuidv4(),
      ...moment,
    };
    this.moments.push(newMoment);
    return newMoment;
  }

  /**
   * Update a moment
   * @param id
   * @param moment
   * @returns updated moment
   * @throws Error if moment not found
   */
  updateMoment(id: string, moment: Moment): Moment {
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

  /**
   * Delete a moment
   * @param id
   * @returns deleted moment
   * @throws Error if moment not found
   */
  deleteMoment(id: string): Moment {
    const momentIndex = this.moments.findIndex((moment) => moment.id === id);
    if (momentIndex < 0) {
      throw new Error('Moment not found');
    }
    const deletedMoment = this.moments[momentIndex];
    this.moments.splice(momentIndex, 1);
    return deletedMoment;
  }
}
