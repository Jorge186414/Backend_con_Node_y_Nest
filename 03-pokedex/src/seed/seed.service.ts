import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { PokeResponse } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios

  async executeSeed() {

    // Una vez que tenemos la interfaz creada le asignamos ese tipo a nuestra respuesta
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    // Extraemos el nombre del pokemon y el id de la respuesta a la API
    data.results.forEach(({ name, url }) => {
      // El nombre si viene en la respuesta de la API pero pero el id viene en la url
      //? Separamos la la url de la respuesta cada que haya una diagonal(/)
      const segments = url.split('/')
      //? Una vez separada la url obtenemos el id en base a la posicion en que separo, en este caso la penultima 
      const no = +segments[segments.length - 2]
      //? Mostramos el name y el id del pokemon
      console.log({ name, no })
    })

    return data.results;
  }
}
