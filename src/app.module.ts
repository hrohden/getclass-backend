import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { IdentitiesModule } from './identities/identities.module';
import { MomentsModule } from './moments/moments.module';

@Module({
  imports: [
    MomentsModule,
    AuthenticationModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IdentitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
