import { User } from "src/modules/user/entities/User";

export class UserViewModel {
  static toHttp({ createdAt, updatedAt, email, id, name, role }:User) {
    return { 
      id, 
      email, 
      name, 
      role,
      createdAt, 
      updatedAt,
    }
  }
}