import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { FleetModule } from './infra/http/modules/fleet/fleet.module';

@Module({
  imports: [DatabaseModule, UserModule, FleetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
