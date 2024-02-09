import { User } from "src/modules/user/entities/User";
import { Request } from "express";

export class AuthRequestModel extends Request {
  user: User;
} 