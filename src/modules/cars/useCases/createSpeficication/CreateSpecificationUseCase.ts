import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/erros/AppError";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}
  async execute({ description, name }: IRequest): Promise<Specification> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists!");
    }

    return this.specificationRepository.create({
      description,
      name,
    });
  }
}

export { CreateSpecificationUseCase };
