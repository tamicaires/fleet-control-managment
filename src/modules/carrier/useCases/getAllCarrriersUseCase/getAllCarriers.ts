import { Injectable } from "@nestjs/common";
import { CarrierRepository } from "../../repositories/CarrierRepository";

interface GetAllCarriersRequest {
  status?: string | null;
  page?: string;
  perPage?: string;
}

@Injectable()
export class GetAllCarriers {
  constructor(private carrierRepository: CarrierRepository) {}

  async execute({ page, perPage }: GetAllCarriersRequest) {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;

    const currentPage = Number(page) || DEFAULT_PAGE;
    const currentPerPage = Number(perPage) || DEFAULT_PER_PAGE;

  
    const carriers = await this.carrierRepository.findAll(
      currentPage, 
      currentPerPage,
    )

    return carriers;
  }
}