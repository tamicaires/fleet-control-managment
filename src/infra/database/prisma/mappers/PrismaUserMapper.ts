import { User as UserRaw } from "@prisma/client";
import { User } from "src/modules/user/entities/User";

export class PrismaUserMapper {
  static toPrisma({ id, email, name, password, role, createdAt,
    updatedAt }: User): UserRaw {
    return {
      id,
      email,
      name, 
      password,
      role,
      createdAt,
      updatedAt
    }
  }

}