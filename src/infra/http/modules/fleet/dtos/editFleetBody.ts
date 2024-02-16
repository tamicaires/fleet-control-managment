import { IsOptional, IsString } from "class-validator";
import { FleetStatus } from "src/modules/fleet/enum/fleet-status.enum";

export class EditFleetBody{

  @IsString()
  @IsOptional()
  fleetNumber: string;
  
  @IsString()
  @IsOptional()
  plate: string;

  @IsString()
  @IsOptional()
  first_trailer_plate: string;

  @IsString()
  @IsOptional()
  second_trailer_plate: string;

  @IsString()
  @IsOptional()
  third_trailer_plate: string;

  @IsString()
  @IsOptional()
  km: string;

  @IsString()
  @IsOptional()
  carrierId: string;

  @IsString()
  @IsOptional()
  status: FleetStatus;
};