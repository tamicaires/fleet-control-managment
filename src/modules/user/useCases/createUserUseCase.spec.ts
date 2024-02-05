import { compare } from "bcrypt"
import { UserRepositoryInMemory } from "../repositories/UserRepositoryInMemory"
import { CreateUserUseCase } from "./createUserUseCase"

let createUserUseCase: CreateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe('Create User', () => {

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
  });

  it('Should be able to create user with password encrypted', async () => {
    const userPasswordWithoutEncryption = '121123'

    const user = await createUserUseCase.execute({
      email: "email@gmail.com",
      name: "Elves",
      password: userPasswordWithoutEncryption,
      role: "ADMIN"
    });

    const userHasPasswordEncrypted = await compare(
      userPasswordWithoutEncryption, 
      user.password
      )
    
    expect(userHasPasswordEncrypted).toBeTruthy();
  });   
})