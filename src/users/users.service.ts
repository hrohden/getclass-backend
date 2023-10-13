import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 'd55cad4c-d3b5-470f-a821-60789d503cf1',
      username: 'hrohden@gmail.com',
      password: '1234',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
