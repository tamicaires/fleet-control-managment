import { HttpStatus } from "@nestjs/common";
import { AppException } from "src/exceptions/appException";

export class AuthValuesIncorretException extends AppException {
  constructor(){
    super({
      message: 'Email ou senha incorretos',
      status: HttpStatus.UNAUTHORIZED
    });
  }
}