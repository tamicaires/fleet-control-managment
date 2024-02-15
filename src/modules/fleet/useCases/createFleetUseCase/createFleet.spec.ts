import { FleetRepositoryInMemory } from "../../repositories/FleetRepositoryInMemory"
import { CreateFleet } from "./createFleet"
import { FleetStatus } from "../../enum/fleet-status.enum";

let createFleet: CreateFleet
let fleetRepositoryInMemory: FleetRepositoryInMemory

describe('Create fleet', () => {
  
  beforeEach(() => {
    fleetRepositoryInMemory = new FleetRepositoryInMemory ()
    createFleet = new CreateFleet(fleetRepositoryInMemory)
  });

  it('Should be able to create fleet', async () => {
    
    expect(fleetRepositoryInMemory.fleets).toEqual([]);

    const fleet = await createFleet.execute({
      fleetNumber: '22541',
      plate: 'OBC5F2C',
      first_trailer_plate: 'OBC5F2C',
      second_trailer_plate: 'OBC5F2C',
      third_trailer_plate: 'OBC5F2C',
      km: '352.2',
      carrierId: '225546',
      status: FleetStatus.ATIVO
    });

    expect(fleetRepositoryInMemory.fleets).toEqual([fleet]);
  });
});