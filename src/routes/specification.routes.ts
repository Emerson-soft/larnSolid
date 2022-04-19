import { Router } from "express";
import multer from "multer";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpeficication/CreateSpecificationController";
import { ImportSpecificationController } from "../modules/cars/useCases/importSpecification/ImportSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

const specificationRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createSpecificationController = new CreateSpecificationController();
const importSpecificationController = new ImportSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationController.handle);

specificationRoutes.post(
  "/import",
  upload.single("file"),
  importSpecificationController.handle
);

export { specificationRoutes };
