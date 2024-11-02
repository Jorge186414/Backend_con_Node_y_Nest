import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios, { AxiosInstance } from 'axios';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) { }

  async executeSeed() {

    // Una vez que tenemos la interfaz creada le asignamos ese tipo a nuestra respuesta
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')

    // Extraemos el nombre del pokemon y el id de la respuesta a la API
    data.results.forEach(async ({ name, url }) => {
      // El nombre si viene en la respuesta de la API pero pero el id viene en la url
      //? Separamos la la url de la respuesta cada que haya una diagonal(/)
      const segments = url.split('/')
      //? Una vez separada la url obtenemos el id en base a la posicion en que separo, en este caso la penultima 
      const no = +segments[segments.length - 2]
      //? Insertamos lo registros en la base de datos
      const pokemon = await this.pokemonModel.create({ name, no })

    })

    return 'Seed Excecuted';
  }
}
