import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'


@Injectable()
export class CarsService {

   private cars: Car[] = [
      {
         id: uuid(),
         brand: 'Toyota',
         model: 'Corolla'
      },
      {
         id: uuid(),
         brand: 'Honda',
         model: 'Civic'
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
         id: uuid(),
         brand: 'Tesla',
         model: 'Model 3'
      }
   ]

   // Metodo para recuperar todos los carros
   findAll() {
      return this.cars
   }

   // Metodo para recuperar los datos de un carro en base a un id
   findOneByID(id: string) {
      const car = this.cars.find(car => car.id === id)

      // Validacion de la existencia del carro
      if (!car) throw new NotFoundException(`Car with id ${id} not found`)

      return car
   }
}
