import { CarrierStatus } from "../../enum/carrier-status.enum";
import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { CreateCarrierUseCase } from "./createCarrier";

let carrierRepositoryInMemory: CarrierRepositoryInMemory;
let createCarrierUseCase: CreateCarrierUseCase;

describe('Create Carrier', () => {
  beforeEach(()=> {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory()
    createCarrierUseCase = new CreateCarrierUseCase(carrierRepositoryInMemory)
  });

  it('Should be able to create carrier', async () => {
    expect(carrierRepositoryInMemory.carriers).toEqual([]);

      const carrier = await createCarrierUseCase.execute({
        carrierName: '3T Transportes',
        manageName: 'Thiago',
        managePhone: '(99) 99125-5535',
        status: CarrierStatus.ATIVO
      })

      expect(carrierRepositoryInMemory.carriers).toEqual([carrier]);
  });
});