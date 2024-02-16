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
    });
  };

  async findById(id: string): Promise<Fleet | null> {
    const fleetRaw = await this.prisma.fleet.findUnique({ 
      where: { id }
    });

    if(!fleetRaw) return null;

    return PrismaFleetMapper.toDomain(fleetRaw);
  };

  async delete(id: string): Promise<void> {
    await this.prisma.fleet.delete({ where: { id }});
  }
  async save(fleet: Fleet): Promise<void> {
    const fleetsRaw = PrismaFleetMapper.toPrisma(fleet);

    await this.prisma.fleet.update({
      data: fleetsRaw,
      where: {
        id: fleetsRaw.id
      }
    });
  };

  async findMany(page: number, perPage: number): Promise<Fleet[]> {
    const fleets = await this.prisma.fleet.findMany({
      take: page,
      skip: (page - 1) * perPage
    });

    return fleets.map(PrismaFleetMapper.toDomain);
  }

  
}