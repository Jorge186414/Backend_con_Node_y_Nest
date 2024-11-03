import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {

  constructor(

    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter

  ) { }

  async executeSeed() {

    //! Dado que va a a ser una Seed que inserte datos a la BD, antes de todo eliminamos los datos existentes en la BD
    await this.pokemonModel.deleteMany()  //! Esto equivale a Delete * FROM nombre_tabla

    // Una vez que tenemos la interfaz creada le asignamos ese tipo a nuestra respuesta
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    //? Definimos la forma que tendra nuestro arreglo de pokemon
    const pokemonToInsert: { name: string, no: number }[] = []

    // Extraemos el nombre del pokemon y el id de la respuesta a la API
    data.results.forEach(async ({ name, url }) => {
      // El nombre si viene en la respuesta de la API pero pero el id viene en la url
      //? Separamos la la url de la respuesta cada que haya una diagonal(/)
      const segments = url.split('/')
      //? Una vez separada la url obtenemos el id en base a la posicion en que separo, en este caso la penultima 
      const no = +segments[segments.length - 2]
      //? Insertamos lo registros en la base de datos
      //const pokemon = await this.pokemonModel.create({ name, no })

      //! Ahora antes de mandarlo a la BD primero lo insertamos todo en un arreglo de pokemon
      pokemonToInsert.push({ name, no }) //? El arreglo luciria asi, [{name: bulbasaur, no: 1}]
    })

    //? Ya que tenemos todos los pokemon almacenados, pasamos a insertarlos a la BD
    await this.pokemonModel.insertMany(pokemonToInsert)
    //! Esto equivale a INSERT INTO nombre_tabla(campo1, campo2)
    //!VALUES(bulbasaur, 1)
    //!VALUES(ivysauir, 1)
    //!VALUES(venusaur, 1)
    //!VALUES(..., ...)
    return 'Seed Excecuted';
  }
}
