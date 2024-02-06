import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModel } from "./viewModel/userViewModel";

@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase){}

  @Post()
  async createPost(@Body() body: CreateUserBody) {

    const { email, password, name, role } = body;

    const user = await this.createUserUseCase.execute({ 
      email, 
      password, 
      name, 
      role 
    });

    return UserViewModel.toHttp(user);
  }
}