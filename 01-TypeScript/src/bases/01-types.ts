// En algunos casos al crear un archivo nos dara un error
// por lo que tenemos que hacer una expotacion para 
// corregir este error

export let name: string = 'Jorge'

// Gracias al typesafety, nos ayuda a inferir que tipo de 
// dato es una variable
//name = 23 // Da error por que se esta infiriendo que name es de tipo string
// lo que no nos permite cambiar el tipo de dato de esta, cosa que si permite JS
name = 'Jennifer' // Esto si es valido, por que es un string

export const templateString = `Con TS y JS podemos crear
template string lo que nos permite usar variables sin 
necesidad de concatenerlas
usar ' simple y "
realizar sumas ${2 + 8}
presentar variables declaras ${name} entre muchas cosas mas
`

console.log(templateString)