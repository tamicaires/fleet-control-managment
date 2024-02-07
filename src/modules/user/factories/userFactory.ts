import { User } from "../entities/User"
import { Role } from "../enum/Roles"

type Override = Partial<User>

export const makeUser = ({id, ...override}: Override) => {
  return new User({
    email: "tami@gmail.com",
      name: "Tamires",
      password: "12345",
      role: Role.ADMIN,
      ...override
  },
  id,
  );
}