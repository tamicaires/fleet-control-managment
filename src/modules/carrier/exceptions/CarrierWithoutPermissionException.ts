import { HttpStatus } from "@nestjs/common";
import { AppException } from "src/exceptions/appException";

interface CarrierPermissionException {
  actionName: string;
}

export class CarrierWithoutPermissionException extends AppException{
  constructor({ actionName }: CarrierPermissionException){
    super({
      message: `Sem permissão para ${actionName} transportadora`,
      status: HttpStatus.UNAUTHORIZED
    });
  };
};