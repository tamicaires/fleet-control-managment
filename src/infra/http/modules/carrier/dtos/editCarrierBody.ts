import { IsOptional } from "class-validator";
import { IsStringCustom } from "src/infra/http/classValidator/decorators/IsStringCustom";
import { CarrierStatus } from "src/modules/carrier/enum/carrier-status.enum";

export class EditCarrierBody {
  @IsStringCustom()
  @IsOptional()
  carrierName: string;

  @IsStringCustom()
  @IsOptional()
  managerName: string;

  @IsStringCustom()
  @IsOptional()
  managerPhone: string;

  @IsStringCustom()
  @IsOptional()
  status: CarrierStatus;
};