import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listSpecificationUseCase.execute();
      return response.json(all);
    } catch (e) {
      return response.status(400).json(e);
    }
  }
}

export { ListSpecificationController };
