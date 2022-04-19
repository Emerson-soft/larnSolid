import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

      const all = await listCategoriesUseCase.execute();
      return response.json(all);
    } catch (error) {
      return response.status(400).json({ error: "user dont't find" });
    }
  }
}

export { ListCategoriesController };
