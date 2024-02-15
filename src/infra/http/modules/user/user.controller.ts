import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateUser } from "src/modules/user/useCases/createUser";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModel } from "./viewModel/userViewModel";
import { Role } from "../auth/decorators/roles.decorator";
import { AuthorizationGuard } from "../auth/guards/authorization.guard";

@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUser){}

  @Post()
  @UseGuards(AuthorizationGuard)
  @Role('ADMIN')
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