import { expect } from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import CarModel from '../../../models/car';
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

describe('Testando model de car', () => {
  describe('Testando função read', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves(arrayOfCars);
    })
    after(() => {
      (Model.find as sinon.SinonStub).restore();
    })

    it('Verifica retorno de read', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal(arrayOfCars);
    })
  })
  describe('Testando função readOne', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(arrayOfCars[0]);
    })
    after(() => {
      (Model.findOne as sinon.SinonStub).restore();
    })

    it('Verifica retorno de readOne', async () => {
      const car = await carModel.readOne(arrayOfCars[0]._id as unknown as string);
      expect(car).to.be.deep.equal(arrayOfCars[0]);
    })
  })
  describe('Testando função create', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(arrayOfCars[0]);
    })
    after(() => {
      (Model.create as sinon.SinonStub).restore();
    })

    it('Verifica retorno de create', async () => {
      const createdCar = await carModel.create(arrayOfCars[0]);
      expect(createdCar).to.be.deep.equal(arrayOfCars[0]);
    })
  })
})