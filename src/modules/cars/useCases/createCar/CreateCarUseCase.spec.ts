import { AppError } from "../../../../shared/erros/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeAll(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "name car",
      description: "description car",
      daily_rate: 100,
      license_plate: "EME-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "Category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a new car with exists license plate", async () => {
    await expect(async () => {
      await createCarUseCase.execute({
        name: "Name car",
        description: "Decription",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "Category",
      });

      await createCarUseCase.execute({
        name: "Name car2",
        description: "Decription",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "Category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Name car",
      description: "Decription",
      daily_rate: 100,
      license_plate: "ABC-123s4",
      fine_amount: 60,
      brand: "Brand",
      category_id: "Category",
    });

    expect(car.available).toBe(true);
  });
});
