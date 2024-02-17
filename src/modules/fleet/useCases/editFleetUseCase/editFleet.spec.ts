import { FleetStatus } from "../../enum/fleet-status.enum";
import { makeFleet } from "../../factories/fleetFactory";
import { FleetRepositoryInMemory } from "../../repositories/FleetRepositoryInMemory";
import { EditFleet } from "./editFleet";
import { FleetNotFoundException } from "../../exceptions/FleetNotFoundException";


let fleetRepositoryInMemory: FleetRepositoryInMemory
let editFleet: EditFleet

describe('Edit Fleet', () => {
  
  beforeEach(() => {
    fleetRepositoryInMemory = new FleetRepositoryInMemory()
    editFleet = new EditFleet(fleetRepositoryInMemory)
  });

  it('Should be able to edit fleet', async () => {
    expect(fleetRepositoryInMemory.fleets).toEqual([]);
    const fleet = makeFleet({});

    fleetRepositoryInMemory.fleets = [fleet];

    const fleetNumberChanged = '22555';

    await editFleet.execute({
      fleetId: fleet.id,
      fleetNumber: fleetNumberChanged,
      plate: 'PTB445SD',
      first_trailer_plate: 'PTB445SD',
      second_trailer_plate: 'PTB445SD',
      third_trailer_plate: 'PTB445SD',
      km: '54525',
      status: FleetStatus.ATIVO
    });

    expect(fleetRepositoryInMemory.fleets[0].fleetNumber).toEqual(fleetNumberChanged)

  });

  it('Should be able to throw error when not find fleet', async () => {

    expect(async () => {
      await editFleet.execute({
        fleetId: 'fakeId',
        fleetNumber: '22548',
        plate: 'PTB445SD',
        first_trailer_plate: 'PTB445SD',
        second_trailer_plate: 'PTB445SD',
        third_trailer_plate: 'PTB445SD', 
        km: '54525',
        status: FleetStatus.ATIVO
      });
    }).rejects.toThrow(FleetNotFoundException);

  });
})
