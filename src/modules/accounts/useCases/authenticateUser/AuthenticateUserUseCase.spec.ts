import { AppError } from "../../../../erros/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryImMemory } from "../../repositories/in-memory/UserRepositoryImMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUserCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryImMemory: UserRepositoryImMemory;
let createUserUseCase: CreateUserUseCase;

describe("", () => {
  beforeEach(() => {
    userRepositoryImMemory = new UserRepositoryImMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryImMemory
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryImMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000012747",
      email: "user@test.com",
      password: "1234",
      name: "user Test",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "1254",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "0012747",
        email: "user@test2.com",
        password: "456789",
        name: "user Test Erro",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: "user@test2.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
