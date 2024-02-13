import { Body, Controller, Post } from "@nestjs/common";
import { CreateFleetBody } from "./dtos/createFleetBody";
import { CreateFleetUseCase } from "src/modules/fleet/useCases/createFleet";

@Controller('fleets')
export class FleetController {

  constructor(private createFleetUseCase: CreateFleetUseCase) {}

  @Post()
  createFleet(@Body() body: CreateFleetBody){
    const { 
      fleetNumber, 
      plate, 
      first_trailer_plate,
      second_trailer_plate,
      third_trailer_plate,
      km, 
      status   
    } = body;

    const fleet = this.createFleetUseCase.execute({
      fleetNumber, 
      plate, 
      first_trailer_plate,
      second_trailer_plate,
      third_trailer_plate,
      km, 
      status
    });

    return fleet;
  }
}