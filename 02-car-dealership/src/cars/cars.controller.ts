import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
   getCarByID(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
      // retornarmos el nombre del carro en base a su posicion en el arreglo
      return this.carsService.findOneByID(id)
   }

   // Metodo para obtener crear un objeto
   @Post()
   @UsePipes(ValidationPipe)  // De esta forma vamos a poder validar los datos que queremos recibir
   createCar(@Body() createCarDto: CreateCarDto) {
      return createCarDto
   }

   // Metodo para editar/actualizar un objeto
   @Patch(':id')
   // Dado que para el patch tambien usamos la validacion en el body, colocamos
   // tambien el decorador en este metodo
   @UsePipes(ValidationPipe)
   updateCar(
      @Param('id') id: string,
      @Body() body: any) {
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
