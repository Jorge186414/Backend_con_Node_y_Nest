export const pokemonIds = [1, 20, 45, 89, 90]

pokemonIds.push('Hola') //! Esto da error por que pokemonIds es un arreglo de numeros, cosa que es posible con JS

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
//! No podemos instanciar interfaces


console.log(bulbasaur)