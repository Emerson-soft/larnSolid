import { Router } from "express";
import multer from "multer";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpeficication/CreateSpecificationController";
import { ImportSpecificationController } from "../../../../modules/cars/useCases/importSpecification/ImportSpecificationController";
import { ListSpecificationController } from "../../../../modules/cars/useCases/listSpecification/ListSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAutheticated } from "../middlewares/ensureAuthenticated";

const specificationRoutes = Router();
specificationRoutes.use(ensureAutheticated);
const upload = multer({
  dest: "./tmp",
});

const createSpecificationController = new CreateSpecificationController();
const importSpecificationController = new ImportSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post(
  "/",
  ensureAutheticated,
  ensureAdmin,
  createSpecificationController.handle
);

specificationRoutes.get(
  "/",
  ensureAutheticated,
  listSpecificationController.handle
);

specificationRoutes.post(
  "/import",
  ensureAutheticated,
  ensureAdmin,
  upload.single("file"),
  importSpecificationController.handle
);

export { specificationRoutes };
