let personas = [
    'Victor',
    'Cristian',
    'Sutanito'
]

//Buscar en un array - find
let busqueda = personas.find(persona => persona === 'Cristian')

//Buscar en un array - findIndex
let busquedaIndice = personas.findIndex(persona => persona === 'Victor')

console.log(busqueda)
console.log(busquedaIndice)

//Crear array basandose en un array iterable

let letras = Array.from("Cristian Cardona")//Esta función convierte en array un parametro que se le pase
console.log(letras)

//Comprobar si existe un elemento en un array - includes
console.log(personas.includes("Victor"))

//Filtrar arrays - filter
let nuevas_personas = personas.filter(persona => persona.includes("o"))

console.log(nuevas_personas)
