"use strict";
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }
    //Método que no devuelve nada
    arrancar() {
        this.encendido = true;
    }
}
//Asignar el tipo de dato de una clase a una variable
let mi_coche = new Coche("BMW", "X3 2024");
console.log(mi_coche);
