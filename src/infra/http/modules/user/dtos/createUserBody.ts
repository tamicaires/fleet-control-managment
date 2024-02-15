import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from "src/modules/user/enum/Roles";

export class CreateUserBody {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  role: Role;

}