import { IsNotEmptyCustom } from "src/infra/http/classValidator/decorators/IsNotEmptyCustom";
import { IsStringCustom } from "src/infra/http/classValidator/decorators/IsStringCustom";
import { CarrierStatus } from "src/modules/carrier/enum/carrier-status.enum";

export class CreateCarrierBody {

  @IsStringCustom()
  @IsNotEmptyCustom()
  carrierName: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  managerName: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  managerPhone: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  status: CarrierStatus;
}