import { NotFoundException } from "@nestjs/common";
import { makeFleet } from "../../factories/fleetFactory";
import { FleetRepositoryInMemory } from "../../repositories/FleetRepositoryInMemory";
import { DeleteFleet } from "./deleteFleet";


let fleetRepositoryInMemory: FleetRepositoryInMemory
let deleteFleet: DeleteFleet

describe('Delete Fleet', () => {

  beforeEach(() => {
    fleetRepositoryInMemory = new FleetRepositoryInMemory()
    deleteFleet = new DeleteFleet(fleetRepositoryInMemory)
  });

  it('Should be able to delete fleet', async () => {
    const fleet = makeFleet({});

    fleetRepositoryInMemory.fleets = [fleet];

    await deleteFleet.execute({
      fleetId: fleet.id
    });
    
    expect(fleetRepositoryInMemory.fleets)
  });


  it('Should be able to throw error when not found fleet', () => {

    expect(async () => {
      await deleteFleet.execute({
        fleetId: 'fakeId'
      });

    }).rejects.toThrow(NotFoundException);
  });
})