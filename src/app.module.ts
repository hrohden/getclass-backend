import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MomentsModule } from './moments/moments.module';

@Module({
  imports: [MomentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
