import { IsNotEmpty, IsString } from "class-validator";
import { CarrierStatus } from "src/modules/carrier/enum/carrier-status.enum";

export class CreateCarrierBody {

  @IsString()
  @IsNotEmpty()
  carrierName: string;

  @IsString()
  @IsNotEmpty()
  managerName: string;

  @IsString()
  @IsNotEmpty()
  managerPhone: string;

  @IsString()
  @IsNotEmpty()
  status: CarrierStatus;
}