import CarSchema, { Car } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
import CarModel from '../models/car';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  read = async (): Promise<Car[]> => (
    this.model.read()
  );

  readOne = async (_id: string): Promise<Car | null> => (
    this.model.readOne(_id)
  );
}

export default CarService;