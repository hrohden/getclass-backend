import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { IdentitiesModule } from 'src/identities/identities.module';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [
    IdentitiesModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('AUTH_JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: configService.get<string>('AUTH_JWT_EXPIRATION', '1d'),
        },
      }),
      global: true,
    }),
    ConfigModule,
  ],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
})
export class AuthenticationModule {}
