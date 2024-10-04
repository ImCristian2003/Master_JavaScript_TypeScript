let titulo = "Venom"
let genero = "Acción"
let duracion = "2 horas"

const pelicula = {
    titulo,
    genero,
    duracion,
    [genero + " 2023"]: "Qué pasa",
    //definir metodos
    mostrar (){
        return this.titulo + this.genero
    }
}

console.log(pelicula)
Object.entries(pelicula).forEach(elemento => console.log(elemento))