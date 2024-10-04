let nombres = [
    'Cristian',
    'Andrés',
    'Raul'
]

//BUCLES MODERNOS
//For of
for(let nombre of nombres){
    //console.log(nombre)
}

//For in - recorrer JSON
for(let indice in nombres){
    //console.log(nombres[indice]);
    //console.log(indice);
}

//ForEach
//nombres.forEach((nombre, indice, array) => console.log(nombre, indice, array))

//Recorrer String
let nombre = 'Cristian'

//For of
for(let letra of nombre){
    //console.log(letra)
}

//Iterables
const mi_interable = nombres[Symbol.iterator]()
//console.log(typeof mi_interable, mi_interable)

/*console.log(mi_interable.next())
console.log(mi_interable.next())
console.log(mi_interable.next())
console.log(mi_interable.next())*/

//JSON
let fruta = {
    nombre: 'Naranja',
    color: 'Naranjado',
    temporada: 'Invierno'
}

//Convertir la variable fruta en iterador
fruta[Symbol.iterator] = function(){
    let indice = 0
    let valores = Object.values(this)

    return {
        next(){

            let valor = valores[indice]

            if(indice >= valores.length){
                return {
                    done: true,
                    value: undefined
                }
            }

            return {
                done: false,
                value: valores[indice++]
            }

        }
    }
}

for(let propiedad of fruta){
    console.log(propiedad)
}