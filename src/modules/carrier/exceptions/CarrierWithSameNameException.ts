import { HttpStatus } from "@nestjs/common";
import { AppException } from "src/exceptions/appException";

export class CarrierWithSameNameException extends AppException {
  constructor(){
    super({
      message: 'Transportadora já existe',
      status: HttpStatus.CONFLICT
    });
  };
};