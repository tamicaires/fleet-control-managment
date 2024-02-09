import { User as UserRaw } from "@prisma/client";
import { User } from "src/modules/user/entities/User";
import { Role } from "src/modules/user/enum/Roles";

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

  static toDomain({ id, email, name, password, role, createdAt,
    updatedAt }: UserRaw): User {
    return new User({
      email,
      name, 
      password,
      role: role as Role,
      createdAt,
      updatedAt}, id)
  }

}