//Alias
type empresas = {
    //Definición de datos que van a regir en la estructura de un objeto
    nombre:string,
    sector:string,
    servicios:string[],
    mostrar: () => string
}

let empresa:empresas = {
    nombre: "Microsoft INC",
    sector: "Informática",
    servicios: ["Sistemas operativos", "Ofimática", "Consolas"],
    mostrar(){
        return `${this.nombre} pertenece al sector de ${this.sector}`
    }
}

console.log(empresa)

console.log(empresa.mostrar())