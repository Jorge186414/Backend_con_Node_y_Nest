import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

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

   create(createCarDto: CreateCarDto) {
      // Para esto hay varias formas
      //? 1. Con la instancia DTO
      const car: Car = {
         id: uuid(),
         brand: createCarDto.brand,
         model: createCarDto.model
      }

      //? 2. Con destructuracion de parametro
      // En los parametros en lugar de poner createCarDto, colocamos el nombre de la 
      // llave de la que queremos extraer el dato
      // (brand, model: CreateCarDto)
      // const car : Car = {
      //    id: uuid(),
      //    brand: brand,
      //    model: ,model
      // }

      //? 3. Con operador ... para esparcir los argumentos
      // const car : Car = {
      //    id: uuid(),
      //    ... createCarDto
      // }

      this.cars.push(car)
      return car
   }

   update(id: string, updateCarDto: UpdateCarDto) {

      let carDB = this.findOneByID(id)

      this.cars = this.cars.map(car => {
         if (car.id === id) {
            carDB = { ...carDB, ...updateCarDto, id }
            return carDB
         }
         return car
      })

      return carDB
   }

}
