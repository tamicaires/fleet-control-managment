import { HttpStatus } from "@nestjs/common";
import { AppException } from "src/exceptions/appException";

interface NotePermissionException {
  actionName: string;
};

export class NoteWithoutPermissionException extends AppException {
  constructor({ actionName }: NotePermissionException) {
    super({
      message: `Sem permissão para ${actionName} anotação`,
      status: HttpStatus.UNAUTHORIZED
    });
  };
};