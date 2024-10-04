//Seleccionar ID de HTML
//Manera clásica
/*let cont1 = document.getElementById("contenedor")

console.log(cont1)

cont1.innerHTML = "Qué se dice"
cont1.style.border = "1px solid black"
cont1.style.backgroundColor = "gray"*/

//Seleccionar class
//Manera JS moderna
let cont = document.querySelectorAll("#contenedor")

cont.forEach((elemento, indice) => {
    elemento.innerHTML = `Hola soy el texto ${indice}`

    if(indice === 2){
        elemento.style.backgroundColor = "gray"
    }
})

