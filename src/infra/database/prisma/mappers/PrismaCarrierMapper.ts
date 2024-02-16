import { Carrier as CarrierRaw } from "@prisma/client";
import { Carrier } from "src/modules/carrier/entities/Carrier";
import { CarrierStatus } from "src/modules/carrier/enum/carrier-status.enum";

export class PrismaCarrierMapper {
  static toPrisma({ 
    id, 
    carrierName, 
    managerName, 
    managerPhone,
    status,
    createdAt,
    updatedAt
  }: Carrier): CarrierRaw{
    return { id, carrierName,
      managerName,
      managerPhone,
      status,
      createdAt,
      updatedAt
    };
  };

  static toDomain({ 
    id, 
    carrierName, 
    managerName, 
    managerPhone, 
    status, 
    createdAt, 
    updatedAt}: CarrierRaw): Carrier {
    
    return new Carrier({
      carrierName, 
      managerName,
      managerPhone,
      status: status as CarrierStatus,
      createdAt,
      updatedAt
    }, id);
  };
};