import { Car } from "src/cars/interfaces/cars.interface";
import { v4 as uuid } from 'uuid'

export const CARS_SEED: Car[] = [
   {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corrolla'
   },
   {
      id: uuid(),
      brand: 'Tesla',
      model: 'Model X'
   },
   {
      id: uuid(),
      brand: 'Ford',
      model: 'Mustang'
   },
   {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'Camaro'
   },
   {
      id:uuid(),
      brand: 'Nissan',
      model: 'Skyline'
   }
]