import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

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
   getCarByID(@Param('id', ParseIntPipe) id: number) {
      // retornarmos el nombre del carro en base a su posicion en el arreglo
      return this.carsService.findOneByID(id)
   }

   @Post()
   createCar(@Body() body: any) {
      return body
   }

   @Patch(':id')
   updateCar(
      @Param('id', ParseIntPipe) id: number,
      @Body() body: any) {
      return body
   }

   @Delete(':id')
   deleteCar(@Param('id', ParseIntPipe) id: number) {
      return {
         method: 'DELETE',
         id: id
      }
   }
}
