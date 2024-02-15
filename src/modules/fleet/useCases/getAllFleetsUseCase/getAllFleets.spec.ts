import { makeFleet } from "../../factories/fleetFactory"
import { FleetRepositoryInMemory } from "../../repositories/FleetRepositoryInMemory"
import { GetAllFleets } from "./getAllFleets"

let fleetRepositoryInMemory: FleetRepositoryInMemory
let getAllFleets: GetAllFleets

describe('Get All Fleets', () => {
  beforeEach(() => {
    fleetRepositoryInMemory = new FleetRepositoryInMemory()
    getAllFleets = new GetAllFleets(fleetRepositoryInMemory)
  });

  it('Should be able to get all Fleets', async () => {

    const fleets = [... new Array(10)].map(() => makeFleet({}));
                                                                                            
    fleetRepositoryInMemory.fleets = fleets;

    const result = await getAllFleets.execute({});

    expect(result).toEqual(fleets);
  });
})