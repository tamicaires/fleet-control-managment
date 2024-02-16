import { Injectable, NotFoundException } from "@nestjs/common";
import { CarrierRepository } from "../../repositories/CarrierRepository";

interface DeleteCarrierRequest {
  carrierId: string;
}

@Injectable()
export class DeleteCarrier {
  constructor(private carrierRepository: CarrierRepository) { }

  async execute({ carrierId }: DeleteCarrierRequest ) {

    const carrier = await this.carrierRepository.findById(carrierId);

    if(!carrier) throw new NotFoundException();
    
    await this.carrierRepository.delete(carrierId);
  };
};