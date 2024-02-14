import { Injectable, NotFoundException } from "@nestjs/common";
import { FleetRepository } from "../../repositories/FleetRepository";

interface DeleteFleetRequest {
  fleetId: string;
}

@Injectable()
export class DeleteFleet {
  constructor(private fleetRepository: FleetRepository) {}

  async execute({ fleetId }: DeleteFleetRequest) {
    
    const fleet = await this.fleetRepository.findById(fleetId);

    if(!fleet) throw new NotFoundException();

    await this.fleetRepository.delete(fleetId);
  };
};