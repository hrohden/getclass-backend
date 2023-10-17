import { Controller } from '@nestjs/common';
import { IdentitiesService } from './identities.service';

@Controller('identities')
export class IdentitiesController {
  constructor(private readonly identitiesService: IdentitiesService) {}
}
