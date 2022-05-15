import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { SpecificationRepository } from "../../infra/typeorm/repositories/SpecificationRespository";

interface IImportSpecification {
  name: string;
  description: string;
}

@injectable()
class ImportSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: SpecificationRepository
  ) {}

  private loadSpecifications(
    file: Express.Multer.File
  ): Promise<IImportSpecification[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const specification: IImportSpecification[] = [];
      const parseFile = parse();
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          specification.push({
            description,
            name,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(specification);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const specifications = await this.loadSpecifications(file);
    specifications.map(async (specification) => {
      const { name, description } = specification;

      const existSpecification = await this.specificationRepository.findByName(
        name
      );

      if (!existSpecification) {
        await this.specificationRepository.create({
          description,
          name,
        });
      }
    });
  }
}

export { ImportSpecificationUseCase };
