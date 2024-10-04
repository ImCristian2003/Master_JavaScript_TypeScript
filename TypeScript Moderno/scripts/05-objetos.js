"use strict";
let empresa = {
    nombre: "Microsoft INC",
    sector: "Informática",
    servicios: ["Sistemas operativos", "Ofimática", "Consolas"],
    mostrar() {
        return `${this.nombre} pertenece al sector de ${this.sector}`;
    }
};
console.log(empresa);
console.log(empresa.mostrar());
