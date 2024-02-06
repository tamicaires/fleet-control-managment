import { Injectable } from "@nestjs/common";
import { FleetRepository } from "src/modules/fleet/repositories/FleetRepository";
import { PrismaService } from "../prisma.service";
import { Fleet } from "src/modules/fleet/entities/Fleet";
import { PrismaFleetMapper } from "../mappers/PrismaFleetMapper";

@Injectable()
export class PrismaFleetRepository implements FleetRepository {
  constructor(private prisma: PrismaService) {}

  async create(fleet: Fleet): Promise<void> {

    const fleetRaw = PrismaFleetMapper.toPrisma(fleet)

    await this.prisma.fleet.create({
      data: fleetRaw
    })
  }

  
}