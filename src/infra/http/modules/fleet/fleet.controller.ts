import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CreateFleetBody } from "./dtos/createFleetBody";
import { CreateFleet } from "src/modules/fleet/useCases/createFleetUseCase/createFleet";
import { EditFleet } from "src/modules/fleet/useCases/editFleetUseCase/editFleet";
import { EditFleetBody } from "./dtos/editFleetBody";
import { mapEditFleetData } from "src/utils/fleetUtils";
import { DeleteFleet } from "src/modules/fleet/useCases/deleteFleet/deleteFleet";
import { GetFleet } from "src/modules/fleet/useCases/getFleetUseCase/getFleet";
import { FleetViewModel } from "./viewModel/FleetViewModel";
import { GetManyFleets } from "src/modules/fleet/useCases/getManyFleetsUseCase/getManyFleets";

@Controller('fleets')
export class FleetController {
  constructor(
    private createFleetUseCase: CreateFleet,
    private editFleetUseCase: EditFleet,
    private deleteFleetUseCase: DeleteFleet,
    private getFleetUseCase: GetFleet,
    private getManyFleetsUseCase: GetManyFleets
    ) {}

  @Post()
  async createFleet(@Body() createFleetBody: CreateFleetBody){
    const fleetData = createFleetBody;
    const fleet = await this.createFleetUseCase.execute(fleetData);
    return fleet; 
  };

  @Put(':id')
  async editFleet(
    @Param('id') fleetId: string,
    @Body() editFleetBody: EditFleetBody
  ){
    const fleetData = mapEditFleetData(editFleetBody, fleetId);
    await this.editFleetUseCase.execute(fleetData);
  };

  @Delete(':id')
  async DeleteFleet(@Param('id') fleetId: string){
    await this.deleteFleetUseCase.execute({ fleetId });
  };

  @Get(':id')
  async getCarrier(@Param('id') fleetId: string){
    const fleet = await this.getFleetUseCase.execute({ fleetId });
    return FleetViewModel.toHttp(fleet);
  };

  @Get()
  async getManyCarriers(
    @Query('page') page: string,
    @Query('perPage') perPage: string){
      const fleets = await this.getManyFleetsUseCase.execute({ page,perPage });
      return fleets.map(FleetViewModel.toHttp);
    };
};