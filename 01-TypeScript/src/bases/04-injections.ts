import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { PokeAPIAdapterAxios, PokeAPIFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	constructor(
		public readonly id: number,
		public name: string,
		// Todo: inyectar dependencias
		private readonly http: PokeAPIAdapterAxios

	) { }

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	speak() {
		console.log(`${this.name}, ${this.name}`);
	}

	async getMoves(): Promise<Move[]> {
		// const { data } = await axios.get<PokeAPIResponse >('https://pokeapi.co/api/v2/pokemon/4'); cambiamos esto por
		// Se hace la inyeccion de dependencias para mejor correccion de errores en caso de una actualizacion en un futuro
		// dato que no tendriamos que cambiar la primer linea que se comento, solo nos dirigimos a nuestro adaptador y lo c
		// cambiamos directament ahi para poder seguir usandolo como dependencia inyectada
		const data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
		console.log(data.moves[0].move.name);

		return data.moves;
	}

}

const pokeApiAxios = new PokeAPIAdapterAxios()
const pokeApiFetch = new PokeAPIFetchAdapter()

export const charmander = new Pokemon(4, 'Charmander', pokeApiAxios);

charmander.getMoves();