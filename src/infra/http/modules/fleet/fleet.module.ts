import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { FleetController } from "./fleet.controller";
import { CreateFleetUseCase } from "src/modules/fleet/useCases/createFleetUseCase/createFleet";

@Module({
  imports: [DatabaseModule],
  controllers: [FleetController],
  providers: [CreateFleetUseCase]
})
export class FleetModule {}