import { Request } from "express";

export class AuthenticatedRequestModel extends Request{
  user: {
    "id": string;
    "name": string;
    "email": string;
    "role": string;
    "createdAt": string;
    "updatedAt": string;
  }
}