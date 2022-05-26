import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCasrUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Toro",
      description: "ok1",
      daily_rate: 2000,
      license_plate: "EME-6541s",
      fine_amount: 300,
      brand: "Fiat",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Toro",
      description: "ok1",
      daily_rate: 2000,
      license_plate: "EME-6541s",
      fine_amount: 300,
      brand: "Teste",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Teste",
    });

    console.log(cars);
  });
});
