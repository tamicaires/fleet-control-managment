import { Injectable } from '@nestjs/common';
import { FleetRepository } from '../repositories/FleetRepository';
import { Fleet } from '../entities/Fleet';

interface CreateFleetRequest {
  fleetNumber: string;
  plate: string;
  first_trailer_plate: string;
  second_trailer_plate: string;
  third_trailer_plate: string;
  km: string;
  status: string;
}

@Injectable()
export class CreateFleetUseCase {
  constructor(private fleetRepository: FleetRepository) {}

  async execute({
    fleetNumber,
    plate,
    first_trailer_plate,
    second_trailer_plate,
    third_trailer_plate,
    km,
    status,
  }) {
    const fleet = new Fleet({
      fleetNumber,
      plate,
      first_trailer_plate,
      second_trailer_plate,
      third_trailer_plate,
      km,
      status,
    });

    await this.fleetRepository.create(fleet);

    return fleet;
  }
}
