//Spread
let heroes = ['Superman', 'Spiderman', 'Venom']

console.log(...heroes)

function mostrarHeroes(heroe1, heroe2){
    console.log(`
        ****MIS SUPERHEROES****
            -${heroe1}
            -${heroe2}
        la buena.
        `)
}

mostrarHeroes('Venom', 'Hulk')
mostrarHeroes(...heroes)

//Añadir elementos de un array a otro
let superheroes = ['flash', 'capitan america', ...heroes]
console.log(superheroes)


//REST
function peliculas(pelicula1, pelicula2, ...nPeliculas){
    console.log(pelicula1)
    console.log(pelicula2)
    for(pelicula of nPeliculas){
        console.log(pelicula)
    }
}

peliculas('Hulk', 'Venom', 'El Conjuro', 'South Park')