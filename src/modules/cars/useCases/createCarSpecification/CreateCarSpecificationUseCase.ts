import { AppError } from "../../../../shared/erros/AppError";
import { ICarRepository } from "../../repositories/ICarsRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    private carsRepository: ICarRepository,
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exists!");
    }

    const specifications = await this.specificationRepository.findByIds(
      specifications_id
    );

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists);
  }
}

export { CreateCarSpecificationUseCase };
