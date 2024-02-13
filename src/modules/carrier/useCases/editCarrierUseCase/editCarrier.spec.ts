import { CarrierStatus } from "../../enum/carrier-status.enum"
import { makeCarrier } from "../../factories/carrierFactory"
import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory"
import { EditCarrier } from "./editCarrier"
import { NotFoundException } from "@nestjs/common"

let carrierRepositoryInMemory: CarrierRepositoryInMemory
let editCarrier: EditCarrier

describe('Edit Carrier', () => {

  beforeEach(() => {
    carrierRepositoryInMemory = new CarrierRepositoryInMemory();
    editCarrier = new EditCarrier(carrierRepositoryInMemory);
  });

  it('Should be able to edit carrier', async () => {

    const carrier = makeCarrier({});

    carrierRepositoryInMemory.carriers = [carrier];

    const carrierNameChanged = 'JATL';
    const manageNameChanged = 'Juceide';
    const managePhoneChanged = '(84)58645-5556'

    await editCarrier.execute({
      carrierId: carrier.id,
      carrierName: carrierNameChanged,
      manageName: manageNameChanged,
      managePhone: managePhoneChanged,
      status: CarrierStatus.ATIVO
    });

    expect(carrierRepositoryInMemory.carriers[0].carrierName)
      .toEqual(carrierNameChanged);

    expect(carrierRepositoryInMemory.carriers[0].manageName)
      .toEqual(manageNameChanged);

    expect(carrierRepositoryInMemory.carriers[0].managePhone)
      .toEqual(managePhoneChanged);     
  });

  it('Should be able to throw error when not found carrier', async () => {
    
    expect(async () => {
      await editCarrier.execute({
        carrierId: 'fakeId',
        carrierName: 'FakeName',
        managePhone: 'FakePhone',
        status: CarrierStatus.ATIVO
      });

    }).rejects.toThrow(NotFoundException);
  })
})