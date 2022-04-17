import { SpecificationRepository } from "../../repositories/implementations/SpecificationRespository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export default (): ListSpecificationController => {
  const specificationRepository = new SpecificationRepository();
  const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationRepository
  );
  const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
  );

  return listSpecificationController;
};
