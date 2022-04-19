import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportSpecificationUseCase } from "./ImportSpecificationUseCase";

class ImportSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { file } = request;

      const importSpecificationUseCase = container.resolve(
        ImportSpecificationUseCase
      );

      await importSpecificationUseCase.execute(file);
      return response.send();
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}

export { ImportSpecificationController };
