import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

let createSpecificationUseCase: CreateSpecificationUseCase;
let specificationInMemory: SpecificationRepositoryInMemory;

describe("Create Specification", () => {
  beforeAll(() => {
    specificationInMemory = new SpecificationRepositoryInMemory();
    createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationInMemory
    );
  });

  it("should be able to create a new specification", async () => {
    const specification = await createSpecificationUseCase.execute({
      name: "Emerson",
      description: "Teste",
    });

    expect(specification).toHaveProperty("id");
  });
});
