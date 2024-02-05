import { Fleet } from "../entities/Fleet";
import { FleetRepository } from "./FleetRepository";

export class FleetRepositoryInMemory implements FleetRepository {

  public fleets: Fleet[] = []

  async create(fleet: Fleet): Promise<void> {
    this.fleets.push(fleet)
  }
}