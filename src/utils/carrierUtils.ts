import { Carrier } from "src/modules/carrier/entities/Carrier";

export function updateCarrierProperties(carrier: Carrier, data: Partial<Carrier>) {
  
  if(data.carrierName !== undefined) {
    carrier.carrierName = data.carrierName;
  };
    
  if(data.managerName !== undefined) {
    carrier.managerName = data.managerName;
  };

  if(data.managerPhone !== undefined) {
    carrier.managerPhone = data.managerPhone;
  };
  
  if(data.status !== undefined) {
    carrier.status = data.status;
  };
};