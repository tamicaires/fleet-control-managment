import { CarrierStatus } from "../../enum/carrier-status.enum";
import { CarrierWithSameNameException } from "../../exceptions/CarrierWithSameNameException";
import { makeCarrier } from "../../factories/carrierFactory";
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

  it('Should be able to throw error when create carrier with already exists carrier', async () => {
    const carrier = makeCarrier({});

    carrierRepositoryInMemory.carriers = [carrier];

    expect([carrier]).toEqual(carrierRepositoryInMemory.carriers);

    expect(async () => createCarrier.execute(
      makeCarrier({
        carrierName: carrier.carrierName
      })
    )).rejects.toThrow(CarrierWithSameNameException)
  });
});