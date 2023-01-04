import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;
  public async getCars() {
    return this.cars;
  }
  public async postCars(car) {
    return this.cars.push(car);
  }
  public async getCarById(id: number) {}
  public async deleteCars(id) {
    return;
  }
  public async putCarsById(id) {
    return;
  }
}
