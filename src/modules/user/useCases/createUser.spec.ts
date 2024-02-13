import { compare } from "bcrypt"
import { UserRepositoryInMemory } from "../repositories/UserRepositoryInMemory"
import { CreateUser } from "./createUser"
import { Role } from "../enum/Roles"

let createUser: CreateUser
let userRepositoryInMemory: UserRepositoryInMemory

describe('Create User', () => {

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    createUser = new CreateUser(userRepositoryInMemory)
  });

  it('Should be able to create user with password encrypted', async () => {
    const userPasswordWithoutEncryption = '121123'

    const user = await createUser.execute({
      email: "email@gmail.com",
      name: "Elves",
      password: userPasswordWithoutEncryption,
      role: Role.ADMIN
    });

    const userHasPasswordEncrypted = await compare(
      userPasswordWithoutEncryption, 
      user.password
      )
    
    expect(userHasPasswordEncrypted).toBeTruthy();
  });   
})