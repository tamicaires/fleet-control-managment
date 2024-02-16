import { Fleet } from "src/modules/fleet/entities/Fleet";

export class FleetViewModel{
  static toHttp({ 
    id,
    fleetNumber,
    plate,
    first_trailer_plate,
    second_trailer_plate,
    third_trailer_plate,
    carrierId,
    km,
    status,
    createdAt,
    updatedAt
  }: Fleet){
    return {
    id,
    fleetNumber,
    plate,
    first_trailer_plate,
    second_trailer_plate,
    third_trailer_plate,
    carrierId,
    km,
    status,
    createdAt,
    updatedAt
    };
  };
};