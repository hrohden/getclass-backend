import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MomentsModule } from './moments/moments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MomentsModule, AuthenticationModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
