import { Carrier } from "src/modules/carrier/entities/Carrier";

export function updateCarrierProperties(carrier: Carrier, data: Partial<Carrier>) {
  if(data.carrierName !== undefined) {
    carrier.carrierName = data.carrierName;
  };
    
  if(data.manageName !== undefined) {
    carrier.manageName = data.manageName;
  };

  if(data.managePhone !== undefined) {
    carrier.managePhone = data.managePhone;
  };
  
  if(data.status !== undefined) {
    carrier.status = data.status;
  };
};