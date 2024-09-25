import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {

   constructor(
      // Inyectamos como dependencia nuestro servicio(provider)
      private readonly carsService: CarsService
   ) { }

   // Metodo para obtener todos los carros
   @Get()
   getAllCars() {
      return this.carsService.findAll()
   }

   // Metodo para recuperar un carro por su id
   @Get(':id')
   // Tratamos al id como string, posteriormente se va a cambiar por number
   getCarByID(@Param('id') id: string) {
      // retornarmos el nombre del carro en base a su posicion en el arreglo
      return this.carsService.findOneByID(id)
   }

   // Metodo para obtener crear un objeto
   @Post()
   createCar(@Body() body: any) {
      return body
   }

   // Metodo para editar/actualizar un objeto
   @Patch(':id')
   updateCar(
      @Param('id') id: string,
      @Body() body: Car) {
      return body
   }

   // Metodo para eliminar un objeto
   @Delete(':id')
   deleteCar(@Param('id') id: string) {
      return {
         method: 'DELETE',
         id: id
      }
   }
}
