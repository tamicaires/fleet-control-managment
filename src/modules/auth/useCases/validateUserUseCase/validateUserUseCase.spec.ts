import { hash } from "bcrypt";
import { ValidateUserUseCase } from "./validateUserUseCase"
import { UserRepositoryInMemory } from "src/modules/user/repositories/UserRepositoryInMemory";
import { Role } from "src/modules/user/enum/Roles";
import { makeUser } from "src/modules/user/factories/userFactory";
import { AuthValuesIncorretException } from "../../exceptions/AuthValuesIncorrectExceptions";

let validateUserUseCase: ValidateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Validade User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory)
  })

  it('should be able to return user when credentials are correct', async () => {

    const userPasswordWithoutEncryption = '121123'

    const user = makeUser({
      email: "tami@gmail.com",
      name: "Tamires",
      password: await hash(userPasswordWithoutEncryption, 10),
      role: Role.ADMIN
    })  

    userRepositoryInMemory.users = [user]

    const result = await validateUserUseCase.execute({
      email: user.email,
      password: userPasswordWithoutEncryption
    });

    expect(result).toEqual(user)
  });

  it('should be able to throw error when credentials are incorrect', async() => {
    const userPasswordWithoutEncryption = '12345';
  
    const user = makeUser({
      password: await hash(userPasswordWithoutEncryption, 10),
    });
  
    userRepositoryInMemory.users = [user];

    await expect(validateUserUseCase.execute({
      email: "incorrect@gmail.com",
      password: userPasswordWithoutEncryption,
    })).rejects.toThrow(AuthValuesIncorretException);

    await expect(validateUserUseCase.execute({
      email: user.email,
      password: "incorrect password",
    })).rejects.toThrow(AuthValuesIncorretException);
  });
  
})