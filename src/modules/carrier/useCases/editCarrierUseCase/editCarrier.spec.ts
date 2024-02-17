import { CarrierStatus } from "../../enum/carrier-status.enum";
import { CarrierNotFoundException } from "../../exceptions/CarrierNotFoundException";
import { makeCarrier } from "../../factories/carrierFactory";
import { CarrierRepositoryInMemory } from "../../repositories/CarrierRepositoryInMemory";
import { EditCarrier } from "./editCarrier";

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
    const managerNameChanged = 'Juceide';
    const managerPhoneChanged = '(84)58645-5556'

    await editCarrier.execute({
      carrierId: carrier.id,
      carrierName: carrierNameChanged,
      managerName: managerNameChanged,
      managerPhone: managerPhoneChanged,
      status: CarrierStatus.ATIVO
    });

    expect(carrierRepositoryInMemory.carriers[0].carrierName)
      .toEqual(carrierNameChanged);

    expect(carrierRepositoryInMemory.carriers[0].managerName)
      .toEqual(managerNameChanged);

    expect(carrierRepositoryInMemory.carriers[0].managerPhone)
      .toEqual(managerPhoneChanged);     
  });

  it('Should be able to throw error when not found carrier', async () => {
    
    expect(async () => {
      await editCarrier.execute({
        carrierId: 'fakeId',
        carrierName: 'FakeName',
        managerPhone: 'FakePhone',
        status: CarrierStatus.ATIVO
      });

    }).rejects.toThrow(CarrierNotFoundException);
  })
})