import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';



@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly branService: BrandsService
  ){}

  populateDB(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.branService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'seed executed';
  }
}
