import { expect } from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import CarModel from '../../../models/car';
import CarService from '../../../services/car';
import { Types } from 'mongoose';

const arrayOfCars = [
  {
    _id: new Types.ObjectId(),
    model: 'Uno da Escada',
    year: 1963,
    color: 'red',
    buyValue: 3500,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: new Types.ObjectId(),
    model: 'Ferrari',
    year: 2004,
    color: 'black',
    buyValue: 350000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: new Types.ObjectId(),
    model: 'Gol',
    year: 2013,
    color: 'gray',
    buyValue: 35000,
    seatsQty: 4,
    doorsQty: 4
  },
]

const carModel = new CarModel();
const carService = new CarService(carModel);

describe('Testando Service de car', () => {
  describe('Testando função read', () => {
    before(() => {
      sinon.stub(carModel, 'read').resolves(arrayOfCars);
    })
    after(() => {
      (carModel.read as sinon.SinonStub).restore();
    })

    it('Verifica retorno de read', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal(arrayOfCars);
    })
  })
  describe('Testando função readOne', () => {
    before(() => {
      sinon.stub(carModel, 'readOne').resolves(arrayOfCars[0]);
    })
    after(() => {
      (carModel.readOne as sinon.SinonStub).restore();
    })

    it('Verifica retorno de readOne', async () => {
      const car = await carService.readOne(arrayOfCars[0]._id as unknown as string);
      expect(car).to.be.deep.equal(arrayOfCars[0]);
    })
  })
})