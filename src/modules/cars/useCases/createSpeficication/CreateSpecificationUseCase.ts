import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/erros/AppError";
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
  async execute({ description, name }: IRequest) {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists!");
    }

    this.specificationRepository.create({
      description,
      name,
    });
  }
}

export { CreateSpecificationUseCase };
