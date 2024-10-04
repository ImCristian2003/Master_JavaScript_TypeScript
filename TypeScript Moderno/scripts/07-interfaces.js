"use strict";
//interface -> Es un contrato, o una estructura que define qué debe tener la clase a la que se le implemente
//Interface a nivel de objeto
let gta = {
    titulo: "GTA V",
    categoria: "Acción",
    edad: 18,
    duracion: 200,
    lanzado: true,
    mostrar() {
        console.log(this.titulo + " " + this.categoria);
    },
    actualizar(consola) {
        return "Actualizado";
    }
};
//Interface a nivel de Clase
class FIFA {
    constructor(
    //Se deben definir las propiedades como públicas para poder acceder a ellas con el this
    titulo, categoria, edad, duracion, //Propiedad opcional
    lanzado //Propiedad opcional
    ) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo + " " + this.categoria);
    }
    actualizar(consola) {
        return "Actualizado";
    }
}
let fifa23 = new FIFA("FIFA 23", "Deportes", 12, 210, true);
console.log(fifa23);
