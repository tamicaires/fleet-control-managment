import { Injectable, NotFoundException } from "@nestjs/common";
import { FleetStatus } from "../../enum/fleet-status.enum";
import { FleetRepository } from "../../repositories/FleetRepository";
import { updateFleetProperties } from "src/utils/updateFleetProperties";

interface EditFleetRequest {
  fleetId: string;
  fleetNumber: string;
  plate: string;
  first_trailer_plate: string;
  second_trailer_plate: string;
  third_trailer_plate: string;
  km: string;
  status: FleetStatus;
}

@Injectable()
export class EditFleet {
  constructor(private fleetRepository: FleetRepository) {}

  async execute(data: EditFleetRequest) {
    const fleet = await this.fleetRepository.findById(data.fleetId);

    if(!fleet) throw new NotFoundException();

    updateFleetProperties(fleet, data);

    await this.fleetRepository.save(fleet);

    return fleet;
  }
};


