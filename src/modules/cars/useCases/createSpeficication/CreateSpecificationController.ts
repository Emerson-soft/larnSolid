import e, { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      await this.createSpecificationUseCase.execute({
        description,
        name,
      });

      return response.status(201).send();
    } catch (erro) {
      return response.status(400).json(erro);
    }
  }
}

export { CreateSpecificationController };
