import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public getCars() {
    return this.carService.getCars();
  }

  @Post()
  public postCar(@Body() car: CarDto) {
    return this.carService.postCar(car);
  }

  @Get(':id')
  public getCarById(@Param('id') id: number) {
    return this.carService.getCarById(id);
  }

  @Delete()
  public deleteCarById() {}

  @Put()
  public putCarById() {}
}
