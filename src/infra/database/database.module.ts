import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository";
import { FleetRepository } from "src/modules/fleet/repositories/FleetRepository";
import { PrismaFleetRepository } from "./prisma/repositories/PrismaFleetRepository";
import { NoteRepository } from "src/modules/note/repositories/noteRepository";
import { PrismaNoteRepository } from "./prisma/repositories/PrismaNoteRepository";

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
      provide: FleetRepository,
      useClass: PrismaFleetRepository
    },
  ],
  exports: [UserRepository, NoteRepository, FleetRepository]
  
})

export class DatabaseModule {}