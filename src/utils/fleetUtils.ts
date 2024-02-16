import { EditFleetBody } from "src/infra/http/modules/fleet/dtos/editFleetBody";
import { Fleet } from "src/modules/fleet/entities/Fleet";

export function updateFleetProperties(fleet: Fleet, data: Partial<Fleet>) {
  if (data.fleetNumber !== undefined) {
    fleet.fleetNumber = data.fleetNumber;
  }
  if (data.plate !== undefined) {
    fleet.plate = data.plate;
  }
  if (data.first_trailer_plate !== undefined) {
    fleet.first_trailer_plate = data.first_trailer_plate;
  }
  if (data.second_trailer_plate !== undefined) {
    fleet.second_trailer_plate = data.second_trailer_plate;
  }
  if (data.third_trailer_plate !== undefined) {
    fleet.third_trailer_plate = data.third_trailer_plate;
  }
  if (data.km !== undefined) {
    fleet.km = data.km;
  }
  if (data.status !== undefined) {
    fleet.status = data.status;
  }
};

export function mapEditFleetData(body: EditFleetBody, fleetId: string){
  const { 
    fleetNumber, 
    plate, 
    first_trailer_plate, 
    second_trailer_plate, 
    third_trailer_plate, 
    km, 
    status
  } = body;

  return {
    fleetId,
    fleetNumber, 
    plate, 
    first_trailer_plate, 
    second_trailer_plate, 
    third_trailer_plate, 
    km, 
    status
  };
};