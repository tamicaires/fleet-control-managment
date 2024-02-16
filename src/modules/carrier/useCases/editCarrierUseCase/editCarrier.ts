import { Injectable, NotFoundException } from "@nestjs/common";
import { CarrierRepository } from "../../repositories/CarrierRepository";
import { CarrierStatus } from "../../enum/carrier-status.enum";
import { updateCarrierProperties } from "src/utils/carrierUtils";

interface EditCarrierRequest {
  carrierName?: string;
  managerName?: string;
  managerPhone?: string;
  status?: CarrierStatus;
  carrierId: string;
};

@Injectable()
export class EditCarrier {
  constructor(private carrierRepository: CarrierRepository) {}

  async execute(data: EditCarrierRequest) {
    const carrier = await this.carrierRepository.findById(data.carrierId);

    if(!carrier) throw new NotFoundException();

    updateCarrierProperties(carrier, data);
    
    await this.carrierRepository.save(carrier);

    return carrier;
  };
}