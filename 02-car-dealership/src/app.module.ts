import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

// building block de Nest, agrupan o deagrupan funcionalidades especificas por dominio
// Modulo root o principal, tiene referencias a toda la aplicacion
@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule { }
