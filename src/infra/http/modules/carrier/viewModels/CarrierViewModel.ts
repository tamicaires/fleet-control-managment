import { Carrier } from "src/modules/carrier/entities/Carrier";

export class CarrierViewModel {
  static toHttp({ 
    id,
    carrierName,
    managerName,
    managerPhone,
    status,
    createdAt, 
    updatedAt
  }: Carrier) {
    return { 
      id,
      carrierName,
      managerName,
      managerPhone,
      status,
      createdAt, 
      updatedAt
    };
  };
};