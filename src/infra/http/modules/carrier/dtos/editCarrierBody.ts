import { IsOptional, IsString } from "class-validator";
import { CarrierStatus } from "src/modules/carrier/enum/carrier-status.enum";

export class EditCarrierBody {
  @IsString()
  @IsOptional()
  carrierName: string;

  @IsString()
  @IsOptional()
  managerName: string;

  @IsString()
  @IsOptional()
  managerPhone: string;

  @IsString()
  @IsOptional()
  status: CarrierStatus;
};