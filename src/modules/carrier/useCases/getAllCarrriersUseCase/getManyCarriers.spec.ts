import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { GetManyCarriers } from "./getManyCarriers";
import { makeCarrier } from "../../factories/carrierFactory";

let carrierRepositoryInMemory: CarrierRepositoryInMemory;
let getManyCarriers: GetManyCarriers

describe('Get Many Carriers', () => {

  beforeEach(() => {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory()
    getManyCarriers = new GetManyCarriers(carrierRepositoryInMemory)
  })

  it('Should be able to get many carriers', async () => {
    const carriers = [... new Array(10)].map(() => makeCarrier({}));

    carrierRepositoryInMemory.carriers = carriers;

    const result = await getManyCarriers.execute({});

    expect(result).toEqual(carriers);
  });

  it('Should be able to control carrier pagination', async () => { 
    const carriers = [...new Array(10)].map(() => makeCarrier({}));

    carrierRepositoryInMemory.carriers = carriers;

    const resultPage1 = await getManyCarriers.execute({ perPage: '5', page: '1' });

    const resultPage2 = await getManyCarriers.execute({ perPage: '5', page: '2' });

    expect(resultPage1?.length).toBe(5);
    expect(resultPage2?.length).toBe(5)
});
});