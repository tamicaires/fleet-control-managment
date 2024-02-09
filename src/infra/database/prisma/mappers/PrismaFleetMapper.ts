import { Fleet as FleetRaw} from "@prisma/client";
import { Fleet } from "src/modules/fleet/entities/Fleet";

export class PrismaFleetMapper {
  static toPrisma({
    id,
    fleetNumber, 
    plate, 
    first_trailer_plate, 
    second_trailer_plate,
    third_trailer_plate,
    km,
    status,
    createdAt,
    updatedAt
  }: Fleet): FleetRaw {
    return {
    id,
    fleetNumber, 
    plate, 
    first_trailer_plate, 
    second_trailer_plate,
    third_trailer_plate,
    km,
    status,
    createdAt,
    updatedAt
    }
  }
}