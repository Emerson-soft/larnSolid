import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listCategoriesUseCase.execute();
      return response.json(all);
    } catch (error) {
      return response.status(400).json({ error: "user dont't find" });
    }
  }
}

export { ListCategoriesController };
