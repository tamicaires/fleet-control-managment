import { makeFleet } from "../../factories/fleetFactory"
import { FleetRepositoryInMemory } from "../../repositories/FleetRepositoryInMemory"
import { GetManyFleets } from "./getManyFleets"

let fleetRepositoryInMemory: FleetRepositoryInMemory
let getManyFleets: GetManyFleets

describe('Get Many Fleets', () => {
  beforeEach(() => {
    fleetRepositoryInMemory = new FleetRepositoryInMemory()
    getManyFleets = new GetManyFleets(fleetRepositoryInMemory)
  });

  it('Should be able to get many Fleets', async () => {

    const fleets = [... new Array(10)].map(() => makeFleet({}));
                                                                                            
    fleetRepositoryInMemory.fleets = fleets;

    const result = await getManyFleets.execute({});

    expect(fleetRepositoryInMemory.fleets).toHaveLength(10)

    expect(result).toEqual(fleets);
  });
})