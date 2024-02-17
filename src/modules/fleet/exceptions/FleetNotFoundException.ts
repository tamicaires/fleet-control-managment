import { HttpStatus } from "@nestjs/common";
import { AppException } from "src/exceptions/appException";

export class FleetNotFoundException extends AppException{
  constructor(){
    super({
      message: 'Frota não encontrada',
      status: HttpStatus.NOT_FOUND
    });
  };
};