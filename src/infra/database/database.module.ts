import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository";
import { FleetRepository } from "src/modules/fleet/repositories/FleetRepository";
import { PrismaFleetRepository } from "./prisma/repositories/PrismaFleetRepository";


@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: FleetRepository,
      useClass: PrismaFleetRepository
    },
  ],
  exports: [UserRepository, FleetRepository]
  
})

export class DatabaseModule {}