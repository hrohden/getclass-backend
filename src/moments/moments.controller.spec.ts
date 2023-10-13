import { Test, TestingModule } from '@nestjs/testing';
import { MomentsController } from './moments.controller';
import { MomentsService } from './moments.service';

describe('MomentsController', () => {
  let controller: MomentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MomentsController],
      providers: [MomentsService],
    }).compile();

    controller = module.get<MomentsController>(MomentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
