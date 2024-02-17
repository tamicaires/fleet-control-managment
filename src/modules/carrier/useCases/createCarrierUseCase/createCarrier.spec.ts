import { CarrierStatus } from "../../enum/carrier-status.enum";
import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { CreateCarrier } from "./createCarrier";

let carrierRepositoryInMemory: CarrierRepositoryInMemory;
let createCarrier: CreateCarrier;

describe('Create Carrier', () => {
  beforeEach(()=> {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory()
    createCarrier = new CreateCarrier(carrierRepositoryInMemory)
  });

  it('Should be able to create carrier', async () => {
    expect(carrierRepositoryInMemory.carriers).toEqual([]);

      const carrier = await createCarrier.execute({
        carrierName: '3T Transportes',
        managerName: 'Thiago',
        managerPhone: '(99) 99125-5535',
        status: CarrierStatus.ATIVO
      })

      expect(carrierRepositoryInMemory.carriers).toEqual([carrier]);
  });
});