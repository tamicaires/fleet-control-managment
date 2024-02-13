import { Injectable, NotFoundException } from "@nestjs/common";
import { CarrierRepository } from "../../repositories/CarrierRepository";
import { CarrierStatus } from "../../enum/carrier-status.enum";

interface EditCarrierRequest {
  carrierName?: string;
  manageName?: string;
  managePhone?: string;
  status?: CarrierStatus;
  carrierId: string;
};

@Injectable()
export class EditCarrier {
  constructor(private carrierRepository: CarrierRepository) {}

  async execute(data: EditCarrierRequest) {
    const carrier = await this.carrierRepository.findById(data.carrierId);

    if(!carrier) throw new NotFoundException();

    if(data.carrierName !== undefined) carrier.carrierName = data.carrierName;
    
    if(data.manageName !== undefined) carrier.manageName = data.manageName;

    if(data.managePhone !== undefined) carrier.managePhone = data.managePhone;
    
    if(data.status !== undefined) carrier.status = data.status;

    await this.carrierRepository.save(carrier);

    return carrier;
  };
}