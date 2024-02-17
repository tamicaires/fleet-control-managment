import { makeCarrier } from "../../factories/carrierFactory";
import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { GetCarrier } from "./getCarrier";
import { CarrierNotFoundException } from "../../exceptions/CarrierNotFoundException";

let carrierRepositoryInMemory: CarrierRepositoryInMemory
let getCarrier: GetCarrier

describe('Get Carrier', () => {

  beforeEach(() => {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory
    getCarrier = new GetCarrier(carrierRepositoryInMemory)
  });

  it('should be ablet to find one carrier', async () => {

    const carrier = makeCarrier({});

    carrierRepositoryInMemory.carriers = [carrier];

    const result = await getCarrier.execute({
      carrierId: carrier.id
    });

    expect(result).toEqual(carrier);
  });

  it('Should be able to throw error when not found carrier', async () => {

    expect(async () => {
      await getCarrier.execute({
        carrierId: 'fakeId'
      });

    }).rejects.toThrow(CarrierNotFoundException);
  });
})