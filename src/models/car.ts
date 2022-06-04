import { Schema, model as createModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import MongoModel from '.';

interface CarDocument extends Car, Document { }

const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class CarModel implements MongoModel<Car> {
  constructor(public model = createModel('Cars', carSchema)) {}

  create = async (obj: Car): Promise<Car> => (
    this.model.create(obj)
  );

  read = async (): Promise<Car[]> => (
    this.model.find()
  );

  readOne = async (_id: string): Promise<Car | null> => (
    this.model.findOne({ _id })
  );
}

export default CarModel;