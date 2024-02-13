import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { hash } from "bcrypt";
import { Role } from "../enum/Roles";


interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
  role: Role;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password, role }: CreateUserRequest) {

    const user = new User({
      email,
      name,
      password: await hash(password, 10),
      role,
    })

    await this.userRepository.create(user);

    return user;
  }
}