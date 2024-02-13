import { Carrier } from "../entities/Carrier"
import { CarrierStatus } from "../enum/carrier-status.enum"

type Override = Partial<Carrier>

export const makeCarrier = ({id, ...override}: Override) => {
  return new Carrier({
    carrierName: '3T Transportes', 
    manageName: 'Thiago',
    managePhone: '(99) 99101-6185',
    status: CarrierStatus.ATIVO,
    ...override
  }, 
  id,
  )};