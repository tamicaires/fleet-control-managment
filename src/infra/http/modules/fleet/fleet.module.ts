import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { FleetController } from "./fleet.controller";
import { CreateFleet } from "src/modules/fleet/useCases/createFleetUseCase/createFleet";

@Module({
  imports: [DatabaseModule],
  controllers: [FleetController],
  providers: [CreateFleet]
})
export class FleetModule {}