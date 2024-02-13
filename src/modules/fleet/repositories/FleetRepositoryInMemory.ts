import { Fleet } from "../entities/Fleet";
import { FleetRepository } from "./FleetRepository";

export class FleetRepositoryInMemory implements FleetRepository {
  
  public fleets: Fleet[] = []

  async create(fleet: Fleet): Promise<void> {
    this.fleets.push(fleet)
  };

  async findById(id: string): Promise<Fleet | null> {
    const fleet = this.fleets.find(fleet => fleet.id === id);

    if(!fleet) return null;

    return fleet;
  };

  async delete(id: string): Promise<void> {
    this.fleets = this.fleets.filter(fleet => fleet.id === id)
  };
}