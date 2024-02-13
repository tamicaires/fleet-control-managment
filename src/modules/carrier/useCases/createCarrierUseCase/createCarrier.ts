import { Injectable } from "@nestjs/common";
import { CarrierStatus } from "../../enum/carrier-status.enum";
import { CarrierRepository } from "../../repositories/CarrierRepository";
import { Carrier } from "../../entities/Carrier";

interface CreateCarrierRequest {
  carrierName: string;
  manageName: string;
  managePhone: string;
  status: CarrierStatus;
}

@Injectable()
export class CreateCarrierUseCase {
  constructor(private carrierRepository: CarrierRepository) { }
  async execute(data: CreateCarrierRequest ) {
    const carrier = new Carrier(data);

    await this.carrierRepository.create(carrier);

    return carrier;
  }
}