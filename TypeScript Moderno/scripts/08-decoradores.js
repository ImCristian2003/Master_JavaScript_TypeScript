"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function mostrarMensaje() {
    console.log("Proyectando");
}
//El valor que devuelve la función debe ser any para evitar que marque error
function proyectar(constructor) {
    constructor.prototype.hacerProyeccion = function (activar) {
        if (activar) {
            console.log("Proyectando ", this.titulo);
        }
        else {
            console.log("Cerrado");
        }
    };
}
let Pelicula = class Pelicula {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
};
Pelicula = __decorate([
    proyectar
], Pelicula);
let batman = new Pelicula("Batman Begins", "Acción");
batman.hacerProyeccion(true);
