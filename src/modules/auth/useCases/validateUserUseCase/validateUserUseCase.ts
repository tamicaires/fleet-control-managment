import { Injectable } from "@nestjs/common";
import { compare } from "bcrypt";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { AuthValuesIncorretException } from "../../exceptions/AuthValuesIncorrectExceptions";

interface ValidateUserRequest {
  email: string;
  password: string;
}

@Injectable()
export class ValidateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({ email, password }: ValidateUserRequest) {

    const user = await this.userRepository.findByEmail(email);

    if(!user) throw new AuthValuesIncorretException();

    const isPasswordMatched = await compare(password, user.password);

    if(!isPasswordMatched)
      throw new AuthValuesIncorretException();

    return user;
  }
}