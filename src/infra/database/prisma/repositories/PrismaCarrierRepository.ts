import { CarrierRepository } from "src/modules/carrier/repositories/CarrierRepository";
import { PrismaService } from "../prisma.service";
import { Carrier } from "src/modules/carrier/entities/Carrier";
import { PrismaCarrierMapper } from "../mappers/PrismaCarrierMapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaCarrierRepository implements CarrierRepository {
  constructor(private prisma: PrismaService) {}

  async create(carrier: Carrier): Promise<void> {
    const carrierRaw = PrismaCarrierMapper.toPrisma(carrier);

    await this.prisma.carrier.create({
      data: carrierRaw
    });
  };

  async findById(id: string): Promise<Carrier | null> {
    const carrierRaw = await this.prisma.carrier.findUnique({
      where: { id }
    });

    if(!carrierRaw) return null;

    return PrismaCarrierMapper.toDomain(carrierRaw);
  };

  async delete(id: string): Promise<void> {
    await this.prisma.carrier.delete({ where: { id } });
  }
  async save(carrier: Carrier): Promise<void> {
    const carrierRaw = PrismaCarrierMapper.toPrisma(carrier);

    await this.prisma.carrier.update({
      data: carrierRaw,
      where: { 
        id: carrierRaw.id 
      }
    });
  };

  async findMany(page: number, perPage: number): Promise<Carrier[] | null> {
    const carriers = await this.prisma.carrier.findMany({
      take: perPage,
      skip: (page - 1) * perPage
    });

    return carriers.map(PrismaCarrierMapper.toDomain)
  };

  async findOne(carrierName: string): Promise<Carrier | null> {
    const carrier = await this.prisma.carrier.findUnique({
      where: { carrierName }
    });

    if(!carrier) return null;

    return PrismaCarrierMapper.toDomain(carrier);
  };
};