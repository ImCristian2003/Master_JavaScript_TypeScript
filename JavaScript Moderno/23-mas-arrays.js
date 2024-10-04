let personas = [
    'Victor',
    'Cristian',
    'Sutanito'
]

let paises = [{
    nombre: 'Colombia',
    continente: 'Sur América'
},
{
    nombre: 'Brasil',
    continente: 'Sur América'
},
{
    nombre: 'Francia',
    continente: 'Europa'
}]

//Some
console.log(personas.some(nombre => nombre == 'Victor'))

//Every
let esIgual = paises.every(pais => pais.continente === 'Sur América')
console.log(esIgual)

//Map
personas.map(persona => console.log(persona))

//Reduce
console.log(personas.reduce((acumulador, actual) => {
    return acumulador + actual
}))