import { Injectable, NotFoundException } from "@nestjs/common";
import { FleetRepository } from "../../repositories/FleetRepository";

interface GetFleetRequest {
  fleetId: string;
}

@Injectable()
export class GetFleet {
  constructor(private fleetRepository: FleetRepository) {}

  async execute({ fleetId }: GetFleetRequest) {
    const fleet = await this.fleetRepository.findById(fleetId);

    if(!fleet) throw new NotFoundException();

    return fleet;
  }
}