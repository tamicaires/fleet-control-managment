import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { FleetModule } from './infra/http/modules/fleet/fleet.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.guard';
import { APP_GUARD } from '@nestjs/core';
import { NoteModule } from './infra/http/modules/note/note.module';
import { CarrierModule } from './infra/http/modules/carrier/carrier.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule, 
    NoteModule,
    CarrierModule,
    FleetModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
