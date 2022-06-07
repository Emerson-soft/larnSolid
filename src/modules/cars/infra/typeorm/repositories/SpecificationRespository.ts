import { getRepository, Repository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../../repositories/ISpecificationRepository";
import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });
    await this.repository.save(specification);
    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    // Select * from specification where name = "name" limit 1
    const specification = await this.repository.findOne({
      name,
    });

    return specification;
  }

  async list(): Promise<Specification[]> {
    const specification = await this.repository.find();
    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }
}

export { SpecificationRepository };
