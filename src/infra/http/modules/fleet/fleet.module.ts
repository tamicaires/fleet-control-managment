import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { FleetController } from "./fleet.controller";
import { CreateFleet } from "src/modules/fleet/useCases/createFleetUseCase/createFleet";
import { EditFleet } from "src/modules/fleet/useCases/editFleetUseCase/editFleet";
import { DeleteFleet } from "src/modules/fleet/useCases/deleteFleet/deleteFleet";
import { GetFleet } from "src/modules/fleet/useCases/getFleetUseCase/getFleet";
import { GetManyFleets } from "src/modules/fleet/useCases/getManyFleetsUseCase/getManyFleets";

@Module({
  imports: [DatabaseModule],
  controllers: [FleetController],
  providers: [
    CreateFleet,
    EditFleet,
    DeleteFleet,
    GetFleet,
    GetManyFleets
  ]
})
export class FleetModule {}