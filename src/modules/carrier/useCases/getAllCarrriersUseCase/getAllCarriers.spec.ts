import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { GetAllCarriers } from "./getAllCarriers";
import { makeCarrier } from "../../factories/carrierFactory";

let carrierRepositoryInMemory: CarrierRepositoryInMemory;
let getAllCarriers: GetAllCarriers

describe('Get All Carriers', () => {

  beforeEach(() => {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory()
    getAllCarriers = new GetAllCarriers(carrierRepositoryInMemory)
  })

  it('Should be able to get all carriers', async () => {
    const carriers = [... new Array(10)].map(() => makeCarrier({}));

    carrierRepositoryInMemory.carriers = carriers;

    const result = await getAllCarriers.execute({});

    expect(result).toEqual(carriers);
  });

  it('Should be able to control carrier pagination', async () => { 
    const carriers = [...new Array(10)].map(() => makeCarrier({}));

    carrierRepositoryInMemory.carriers = carriers;

    const resultPage1 = await getAllCarriers.execute({ perPage: '5', page: '1' });

    const resultPage2 = await getAllCarriers.execute({ perPage: '5', page: '2' });

    expect(resultPage1?.length).toBe(5);
    expect(resultPage2?.length).toBe(5)
});

})