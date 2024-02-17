import { Injectable } from "@nestjs/common";
import { CarrierStatus } from "../../enum/carrier-status.enum";
import { CarrierRepository } from "../../repositories/CarrierRepository";
import { Carrier } from "../../entities/Carrier";
import { CarrierWithSameNameException } from "../../exceptions/CarrierWithSameNameException";

interface CreateCarrierRequest {
  carrierName: string;
  managerName: string;
  managerPhone: string;
  status: CarrierStatus;
}

@Injectable()
export class CreateCarrier {
  constructor(private carrierRepository: CarrierRepository) { }
  async execute(data: CreateCarrierRequest ) {
    const carrierAlreadyExist = await this.carrierRepository.findOne(
      data.carrierName
    );

    if(carrierAlreadyExist) throw new CarrierWithSameNameException();

    const carrier = new Carrier(data);

    await this.carrierRepository.create(carrier);

    return carrier;
  }
}