import { IsOptional } from "class-validator";
import { IsStringCustom } from "src/infra/http/classValidator/decorators/IsStringCustom";
import { FleetStatus } from "src/modules/fleet/enum/fleet-status.enum";

export class EditFleetBody{

  @IsStringCustom()
  @IsOptional()
  fleetNumber: string;
  
  @IsStringCustom()
  @IsOptional()
  plate: string;

  @IsStringCustom()
  @IsOptional()
  first_trailer_plate: string;

  @IsStringCustom()
  @IsOptional()
  second_trailer_plate: string;

  @IsStringCustom()
  @IsOptional()
  third_trailer_plate: string;

  @IsStringCustom()
  @IsOptional()
  km: string;

  @IsStringCustom()
  @IsOptional()
  carrierId: string;

  @IsStringCustom()
  @IsOptional()
  status: FleetStatus;
};