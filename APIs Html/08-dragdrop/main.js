const tomates = document.querySelectorAll(".caja")
const huerto = document.querySelector("#zona-drop")

tomates.forEach((tomate, indice) => {

    //Asignar id a los elementos
    tomate.setAttribute("id", "tomate" + indice)
    //DRAGSTART -> cuando arrastres el elemento salte el evento
    //DRAG -> mientras se arrastre el evento salta el evento
    //DRAGEND -> cuando se suelta salta el evento
    tomate.addEventListener("dragstart", (e) => {
        //console.log("Estás moviendo el tomate " + parseInt(indice + 1))

        //Compartir info del elemento que muevo
        e.dataTransfer.setData("text", e.targe.id)
    })
})

//DRAGENTER -> Cuando un elemento entre a la caja
//DRAGOVER -> Cuando se mueve el elemento dentro de la caja
//DROP -> Cuando se suelta el elemento en la caja
//DRAGLEAVE -> Cuando se saca el elemento de la caja
huerto.addEventListener("dragover", (e) => {
    e.preventDefault()
})

huerto.addEventListener("drop", (e) => {
    e.preventDefault()
    console.log("Plantado")
})