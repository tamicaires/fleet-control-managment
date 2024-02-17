import { HttpStatus } from "@nestjs/common";
import { AppException } from "src/exceptions/appException";

export class CarrierNotFoundException extends AppException{
  constructor(){
    super({
      message: 'Transportadora não encontrada',
      status: HttpStatus.NOT_FOUND
    });
  };
};