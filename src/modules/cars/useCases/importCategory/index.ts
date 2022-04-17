import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default (): ImportCategoryController => {
  const categoryRepository = null;
  const importCategoryUSeCase = new ImportCategoryUseCase(categoryRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryUSeCase
  );

  return importCategoryController;
};
