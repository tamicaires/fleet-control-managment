import { FleetRepositoryInMemory } from "../repositories/FleetRepositoryInMemory"
import { CreateFleetUserCase } from "./createFleetUseCase"

let createFleetUserCase: CreateFleetUserCase
let fleetRepositoryInMemory: FleetRepositoryInMemory

describe('Create fleet', () => {
  
  beforeEach(() => {
    fleetRepositoryInMemory = new FleetRepositoryInMemory ()
    createFleetUserCase = new CreateFleetUserCase(fleetRepositoryInMemory)
  });

  it('Should be able to create fleet', async () => {
    expect(fleetRepositoryInMemory.fleets).toEqual([]);

    const fleet = await createFleetUserCase.execute({
      fleetNumber: '22541',
      plate: 'OBC5F2C',
      first_trailer_plate: 'OBC5F2C',
      second_trailer_plate: 'OBC5F2C',
      third_trailer_plate: 'OBC5F2C',
      km: '352.2',
      status: 'Ativo'
    });

    expect(fleetRepositoryInMemory.fleets).toEqual([fleet]);
  });
});