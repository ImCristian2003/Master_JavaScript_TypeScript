//Separadores numéricos
let numero = 4_000_000 //Mejora la legibilidad de los números
console.log(numero)

//Replace y ReplaceAll
let frase = 'Un saludo pa las perras checho, qué rico las perras'
let nueva_frase = frase.replaceAll('perras', 'diablas')//Reemplaza de manera global la palabra solicitada
console.log(nueva_frase)

//Asignadores lógicos
let nombre = 'Cristian'
let edad = 21

nombre &&= edad//Asignador lógico de variable

console.log(nombre)