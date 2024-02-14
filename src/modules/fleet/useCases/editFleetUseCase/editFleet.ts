import { Injectable, NotFoundException } from "@nestjs/common";
import { FleetStatus } from "../../enum/fleet-status.enum";
import { FleetRepository } from "../../repositories/FleetRepository";

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

      fleet.fleetNumber = data.fleetNumber;
      fleet.plate = data.plate;
      fleet.first_trailer_plate = data.first_trailer_plate;
      fleet.second_trailer_plate = data.second_trailer_plate;
      fleet.third_trailer_plate = data.third_trailer_plate;
      fleet.km = data.km;
      fleet.status = data.status;

    await this.fleetRepository.save(fleet);

    return fleet;
  }
};


