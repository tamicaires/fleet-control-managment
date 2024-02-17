import { makeCarrier } from "../../factories/carrierFactory";
import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { DeleteCarrier } from "./deleteCarrier";
import { CarrierNotFoundException } from "../../exceptions/CarrierNotFoundException";

let carrierRepositoryInMemory: CarrierRepositoryInMemory;
let deleteCarrier: DeleteCarrier;

describe('Delete Carrier', () => {
  beforeEach(()=> {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory()
    deleteCarrier = new DeleteCarrier(carrierRepositoryInMemory)
  });

  it('Should be able to delete carrier', async () => {
    expect(carrierRepositoryInMemory.carriers).toEqual([]);

      const carrier = makeCarrier({});

      carrierRepositoryInMemory.carriers = [carrier];

      await deleteCarrier.execute({
        carrierId: carrier.id
      });

      expect(carrierRepositoryInMemory.carriers).toHaveLength(0);
  });

  it('Should be able to throw error when not find carrier', async () => {

    expect(async () => {
      await deleteCarrier.execute({
        carrierId: 'fakeId'
      });
    }).rejects.toThrow(CarrierNotFoundException);
    
  });
});