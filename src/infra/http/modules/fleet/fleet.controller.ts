import { Body, Controller, Post } from "@nestjs/common";
import { CreateFleetBody } from "./dtos/createFleetBody";
import { CreateFleet } from "src/modules/fleet/useCases/createFleetUseCase/createFleet";

@Controller('fleets')
export class FleetController {

  constructor(private createFleetUseCase: CreateFleet) {}

  @Post()
  createFleet(@Body() body: CreateFleetBody){
    const { 
      fleetNumber, 
      plate, 
      first_trailer_plate,
      second_trailer_plate,
      third_trailer_plate,
      km,
      carrierId,
      status  
    } = body;

    const fleet = this.createFleetUseCase.execute({
      fleetNumber, 
      plate, 
      first_trailer_plate,
      second_trailer_plate,
      third_trailer_plate,
      km,
      carrierId,
      status
    });

    return fleet;
  }
}