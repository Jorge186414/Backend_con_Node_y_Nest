import axios from 'axios'

// Abstraccion de un objeto que existe en la vida real
// Con las clases podremos hacer instancias de estas,
// cosa que no es posible con las interfaces, ya que solo
// agregan reglas y condiciones a algo
export class Pokemon {

  // getters y setters
  get imageUrl(): string {
    return `https://pokemon/com/${this.id}.jpg`
  }


  // El metodo constructor va a ser ejecutado cada que se 
  // cree una instancia de la clase Pokemon
  constructor(
    // Pasando los parametros de esta forma nos evitamos la asignacion mediante .this
    public readonly id: number,
    public name: string,
  ) { }

  // Metodos de clase
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name}, ${this.name}`)
  }

  // Funciones asincronas
  async getMoves(){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/63')
    console.log(response.data.moves)
    return response.data.moves
  }
}

export const abra = new Pokemon(65, 'Abra')

//console.log(abra.imageUrl)
//abra.speak()
//abra.scream()

abra.getMoves()