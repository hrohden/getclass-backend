import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { MomentsModule } from './moments/moments.module';
import { UsersModule } from './users/users.module';
import { IdentitiesModule } from './identities/identities.module';

@Module({
  imports: [
    MomentsModule,
    AuthenticationModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IdentitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
