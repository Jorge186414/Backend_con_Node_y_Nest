// Abstraccion de un objeto que existe en la vida real
// Con las clases podremos hacer instancias de estas,
// cosa que no es posible con las interfaces, ya que solo
// agregan reglas y condiciones a algo
export class Pokemon {
  public id: number
  public name: string

  // El metodo constructor va a ser ejecutado cada que se 
  // cree una instancia de la clase Pokemon
  constructor(id:number, name:string){
    this.id = id
    this.name = name
  }
}

export const abra = new Pokemon(65, 'Abra')