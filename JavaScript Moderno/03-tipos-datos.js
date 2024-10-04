//JSON - JavaScript Object Notation - Objetos literales

let pelicula = {
    titulo: 'Avengers',
    genero: 'Ciencia Ficción',
    anio: '2019',
    director: 'Sabrá Dios',
    mostrar: function(){
        return `
            ****PELICULA DE LA SEMANA****
            ${this.anio} - ${this.director} \n 
        `;
    }
};

//Añadir propiedades al objeto

pelicula.pais = 'Estados Unidos';

console.log('titulo' in pelicula)

//Comprobar existencia de una propiedad
console.log(pelicula.mostrar())


for(let propiedad in pelicula){

    if(pelicula[propiedad] != null && typeof(pelicula[propiedad]) != "function"){
        console.log(pelicula[propiedad])
    }

}


///////////////////////////////////////////////SYMBOL/////////////////////////////////////////////////////////

//Symbol
let animal = Symbol('tigre');
let animal2 = Symbol('tigre');

let user = {
    id: 1,
    nombre: 'Cristian'
}

//Añadir ir al objeto sin que entre en conflicto
let id = Symbol('id');
user[id] = 7;

console.log(user)

//console.log(animal == animal2)//Da false al tratarse de 2 variables distintas
