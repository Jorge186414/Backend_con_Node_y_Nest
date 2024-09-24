import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

   // Se separan los carros para poder recuperarlos en base a su ID
   private cars = ['Toyota', 'Subaru', 'Nissan', 'Chevrolet', 'Ford']

   @Get()
   getAllCars() {
      return this.cars
   }

   // Metodo para recuperar un carro por su id
   @Get(':id')
   // Tratamos al id como string, posteriormente se va a cambiar por number
   getCarByID(@Param('id') id: string) {
      // retornarmos el nombre del carro en base a su posicion en el arrgelo
      return this.cars[id]
   }
}
