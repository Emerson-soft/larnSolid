import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRespository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpeficicationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({
    description,
    name,
  });

  return response.status(201).send();
});

export { specificationRoutes };
