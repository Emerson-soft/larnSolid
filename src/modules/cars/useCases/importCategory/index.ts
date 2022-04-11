import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUSeCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUSeCase
);

export { importCategoryController };
