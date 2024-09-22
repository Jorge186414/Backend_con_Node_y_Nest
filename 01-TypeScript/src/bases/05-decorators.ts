// El decorador tiene acceso al definicion de la clase, y podra 
// expandir, extender agregar, bloquear o eliminar funcionalidades
// e inclusive sobreescribir toda la clase o crear una nueva basada 
// en esta, no son mas que una simple funcion, pero dependiendo de 
// como se utilice puede hacer todo lo previamente mencionado

const MyDecorator = () => {
    // Llevaria referencia al target
    return (target: Function) => {
        return NewPokemon
    }
}

class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ) {
    }

    scream() {
        console.log(`No quero !!!`)
    }

    speak() {
        console.log(`No quiere hablar el pokemon!`)
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ) {
    }

    scream() {
        console.log(`${this.name.toUpperCase()} !!!`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`)
    }
}

export const charmander = new Pokemon(4, 'charmander')
charmander.scream()
charmander.speak()