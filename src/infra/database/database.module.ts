import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository";
import { FleetRepository } from "src/modules/fleet/repositories/FleetRepository";
import { PrismaFleetRepository } from "./prisma/repositories/PrismaFleetRepository";
import { NoteRepository } from "src/modules/note/repositories/noteRepository";
import { PrismaNoteRepository } from "./prisma/repositories/PrismaNoteRepository";
import { CarrierRepository } from "src/modules/carrier/repositories/CarrierRepository";
import { PrismaCarrierRepository } from "./prisma/repositories/PrismaCarrierRepository";

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: NoteRepository,
      useClass: PrismaNoteRepository
    },
    {
      provide: CarrierRepository,
      useClass: PrismaCarrierRepository
    },
    {
      provide: FleetRepository,
      useClass: PrismaFleetRepository
    },
  ],
  exports: [UserRepository, NoteRepository, CarrierRepository, FleetRepository]
  
})

export class DatabaseModule {}