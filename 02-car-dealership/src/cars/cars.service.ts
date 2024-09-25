import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

   private cars = [
      {
         id: 1,
         brand: 'Toyota',
         model: 'Corolla'
      },
      {
         id: 2,
         brand: 'Honda',
         model: 'Civic'
      },
      {
         id: 3,
         brand: 'Ford',
         model: 'Mustang'
      },
      {
         id: 4,
         brand: 'Chevrolet',
         model: 'Camaro'
      },
      {
         id: 5,
         brand: 'Tesla',
         model: 'Model 3'
      }
   ]

   // Metodo para recuperar todos los carros
   findAll() {
      return this.cars
   }

   // Metodo para recuperar los datos de un carro en base a un id
   findOneByID(id: number) {
      const car = this.cars.find(car => car.id === id)

      // Validacion de la existencia del carro
      if (!car) throw new NotFoundException(`Car with id ${id} not found`)
         
      return car
   }
}
