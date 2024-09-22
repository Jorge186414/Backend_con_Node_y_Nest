// Este decorador nos ayuda a referenciar la razon por la que un metodo se va a 
// dejar de usar, con esto se agregamos una funcion a un metodo para alertar
// al usuario sobre una funcionalidad que sera eliminada en un futuro

const Deprecated = (deprecationReason: string) => {
   return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
         get() {
            const wrapperFn = (...args: any[]) => {
               console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
               //! Llamar la función propiamente con sus argumentos
               propertyDescriptor.value.apply(this, args);
            }
            return wrapperFn;
         }
      }
   }
}

export class Pokemon {
   constructor(
      public readonly id: number,
      public name: string
   ) {
   }

   scream() {
      console.log(`${this.name.toUpperCase()} !!!`)
   }

   @Deprecated('Most use speak2 method instead')
   speak() {
      console.log(`${this.name}, ${this.name}!`)
   }

   speak2() {
      console.log(`${this.name}, ${this.name}!!!!!`)
   }
}

export const charmander = new Pokemon(4, 'charmander')
charmander.speak()