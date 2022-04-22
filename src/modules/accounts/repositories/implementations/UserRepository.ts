import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    email,
    name,
    password,
    username,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      name,
      password,
      username,
      driver_license,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
