import { Injectable } from '@nestjs/common';
import { FleetRepository } from '../repositories/FleetRepository';
import { Fleet } from '../entities/Fleet';
import { FleetStatus } from '../enum/fleet-status.enum';

interface CreateFleetRequest {
  fleetNumber: string;
  plate: string;
  first_trailer_plate: string;
  second_trailer_plate: string;
  third_trailer_plate: string;
  km: string;
  status: FleetStatus;
}

@Injectable()
export class CreateFleet {
  constructor(private fleetRepository: FleetRepository) {}

  async execute(data: CreateFleetRequest) {
    const fleet = new Fleet({
      fleetNumber: data.fleetNumber,
      plate: data.plate,
      first_trailer_plate: data.first_trailer_plate,
      second_trailer_plate: data.second_trailer_plate,
      third_trailer_plate: data.third_trailer_plate,
      km: data.km,
      status: data.status
    });

    await this.fleetRepository.create(fleet);

    return fleet;
  };
};
