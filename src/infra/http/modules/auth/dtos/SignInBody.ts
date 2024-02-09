import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignInBody {
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  password: string;
}