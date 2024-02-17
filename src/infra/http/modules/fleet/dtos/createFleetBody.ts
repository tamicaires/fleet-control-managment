import { IsNotEmptyCustom } from "src/infra/http/classValidator/decorators/IsNotEmptyCustom";
import { IsStringCustom } from "src/infra/http/classValidator/decorators/IsStringCustom";
import { MinLengthCustom } from "src/infra/http/classValidator/decorators/MinLengthCustom";
import { FleetStatus } from "src/modules/fleet/enum/fleet-status.enum";

export class CreateFleetBody {

  @IsStringCustom()
  @IsNotEmptyCustom()
  @MinLengthCustom(5)
  fleetNumber: string;
  
  @IsStringCustom()
  @IsNotEmptyCustom()
  plate: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  first_trailer_plate: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  second_trailer_plate: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  third_trailer_plate: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  km: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  carrierId: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  status: FleetStatus;

}