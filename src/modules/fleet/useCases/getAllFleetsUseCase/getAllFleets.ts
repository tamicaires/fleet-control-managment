import { Injectable } from "@nestjs/common";
import { FleetRepository } from "../../repositories/FleetRepository";

interface GetAllFleetsRequest {
  page?: string;
  perPage?: string;
}

@Injectable()
export class GetAllFleets {
  constructor(private fleetRepository: FleetRepository) {}

  async execute({ page, perPage }: GetAllFleetsRequest) {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;
    
    const currentPage = Number(page) || DEFAULT_PAGE;
    const currentPerPage = Number(perPage) | DEFAULT_PER_PAGE;

    const fleets = await this.fleetRepository.findAll(
      currentPage,
      currentPerPage
    );

    return fleets;
  }
}