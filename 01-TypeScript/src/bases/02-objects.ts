export const pokemonIds = [1, 20, 45, 89, 90]

// pokemonIds.push('Hola') //! Esto da error por que pokemonIds es un arreglo de numeros, cosa que es posible con JS

console.log(pokemonIds)
// Pero si lo mostramos, aparentemente si incluyo Hola en el arreglo
// ya que al compilarlo a un JS trata de convertir todo el codigo TS a JS

pokemonIds.push(+'1') // De esta forma agregamos el numero como tipo number

// Podemos implementar interface, para obligar a que una llave sea de un determinado 
// tipo de datos

interface Pokemon {
  id: number
  name: string
  age?: number  // Especificamos que el valor es numerico y puede ser nulo
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur'
}

export const lapras: Pokemon ={
  id: 19,
  name: 'lapras'
}
//! No podemos instanciar interfaces

//! Con esto especificamos que pokemons va a ser un arreglo de tipo Pokemon,
//! de esta forma no infiere el tipo de dato, si no que nosotros que lo asignamos
export const pokemons:Pokemon[] = [ ]
pokemons.push(bulbasaur)
pokemons.push(lapras)
console.log(pokemons)