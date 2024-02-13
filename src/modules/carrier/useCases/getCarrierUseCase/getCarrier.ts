import { Injectable, NotFoundException } from "@nestjs/common";
import { CarrierRepository } from "../../repositories/CarrierRepository";

interface GetCarrierRequest {
  carrierId: string;
}

@Injectable()
export class GetCarrier {
  constructor(private carrierRepository: CarrierRepository) {}

  async execute({ carrierId }: GetCarrierRequest) {
    
    const carrier = await this.carrierRepository.findById(carrierId);

    if(!carrier) throw new NotFoundException();

    return carrier;
  };

};