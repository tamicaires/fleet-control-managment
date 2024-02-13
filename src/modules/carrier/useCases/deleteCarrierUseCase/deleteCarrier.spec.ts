import { NotFoundException } from "@nestjs/common";
import { makeCarrier } from "../../factories/carrierFactory";
import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { DeleteCarrierUseCase } from "./deleteCarrier";

let carrierRepositoryInMemory: CarrierRepositoryInMemory;
let deleteCarrierUseCase: DeleteCarrierUseCase;

describe('Delete Carrier', () => {
  beforeEach(()=> {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory()
    deleteCarrierUseCase = new DeleteCarrierUseCase(carrierRepositoryInMemory)
  });

  it('Should be able to delete carrier', async () => {
    expect(carrierRepositoryInMemory.carriers).toEqual([]);

      const carrier = makeCarrier({});

      carrierRepositoryInMemory.carriers = [carrier];

      await deleteCarrierUseCase.execute({
        carrierId: carrier.id
      });

      expect(carrierRepositoryInMemory.carriers).toHaveLength(0);
  });

  it('Should be able to throw error when not find carrier', async () => {

    expect(async () => {
      await deleteCarrierUseCase.execute({
        carrierId: 'fakeId'
      });
    }).rejects.toThrow(NotFoundException);
    
  });
});