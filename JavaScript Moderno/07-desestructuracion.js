let frutas = [
    'manzana',
    'pera',
    'naranja',
    'sandia'
]

//Desestructuración clásica
/*let manzana = frutas[0]
let pera = frutas[1]*/

//Desestructurar array
let [manzana, pera, naranja, sandia] = frutas

console.log(sandia)

//Desestructurar objetos

let persona = {
    nombre : 'Cristian',
    edad : 21,
    altura : 1.74,
    pais : 'Colombia'
}

//let {nombre, edad, pais} = persona

//Desestructurar string
let info_completa = 'Cristian Cardona 1006483 3243819282 Colombia'
let [nombre, apellido, id, telefono, pais] = info_completa.split(' ')

//Utilidad parametros funciones
function mostrarUsuario({nombre, apellidos, ciudad = 'Medellin'}){
    console.log(nombre, apellidos, ciudad)
}

mostrarUsuario({nombre : 'Cristian', apellidos: 'Cardona'})