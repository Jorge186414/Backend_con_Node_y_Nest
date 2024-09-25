import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
   createCar(@Body() createCarDto: CreateCarDto) {
      return this.carsService.create(createCarDto)
   }

   // Metodo para editar/actualizar un objeto
   @Patch(':id')
   updateCar(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateCarDto: UpdateCarDto) {
      return this.carsService.update(id, updateCarDto)
   }

   // Metodo para eliminar un objeto
   @Delete(':id')
   deleteCar(@Param('id', ParseUUIDPipe) id: string) {
      return this.carsService.delete(id)
   }
}
