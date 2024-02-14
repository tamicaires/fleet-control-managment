import { NotFoundException } from "@nestjs/common"
import { makeFleet } from "../../factories/fleetFactory"
import { FleetRepositoryInMemory } from "../../repositories/FleetRepositoryInMemory"
import { GetFleet } from "./getFleet"

let fleetRepositoryInMemory: FleetRepositoryInMemory
let getFleet: GetFleet

describe('Get Fleet', () => {

  beforeEach(() => {
    fleetRepositoryInMemory = new FleetRepositoryInMemory()
    getFleet = new GetFleet(fleetRepositoryInMemory)
  });

  it('Should be able to get Fleet', async () => {
    const fleet = makeFleet({});

    fleetRepositoryInMemory.fleets = [fleet];

    const result = await getFleet.execute({
      fleetId: fleet.id
    });

    expect(result).toEqual(fleet)   
  });

  it('Should be able to throw error when not found fleet', () => {

    expect(async () => {
      await getFleet.execute({
        fleetId: 'fakeId'
      });
    }).rejects.toThrow(NotFoundException);
  })
})