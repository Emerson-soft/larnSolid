import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private ImportCategoryUseCase: ImportCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { file } = request;
      await this.ImportCategoryUseCase.execute(file);
      return response.send();
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}

export { ImportCategoryController };
