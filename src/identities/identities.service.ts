import { Injectable } from '@nestjs/common';
import { Identity } from './entities/identity.entity';

@Injectable()
export class IdentitiesService {
  identities: Identity[] = [
    {
      id: 'd55cad4c-d3b5-470f-a821-60789d503cf1',
      username: 'hrohden@gmail.com',
      password: '$2a$12$TZi5xw0m3ZJxADz7QEhniOyxiT4rwc.FMqoRUQHI6xt51v/3q3Yze',
    },
  ];

  async findOne(username: string): Promise<Identity | undefined> {
    return this.identities.find((identity) => identity.username === username);
  }
}
