import _delete from "./delete.js"
import edit from "./edit.js"

export default class List {

    constructor(){
        //Seleccionar elementos del DOM a usar
        this.content = document.querySelector('#content')
    }

    peli_template(peli){
        return `<article class="peli-item" id="peli-${peli.id}">
                <h3 class="title">${peli.title}</h3>
                <p class="description">${peli.description}</p>
                <button class="edit" data-id="${peli.id}">Editar</button>
                <button class="delete" data-id="${peli.id}">Eliminar</button>
            </article>`
    }

    /*addToList(peli, list_pelis){
        let peli_html = this.peli_template(peli)
        
        //Añadir película al contenido
        this.content.innerHTML += peli_html

        //Mostrar listado de películas
        this.show(list_pelis)

    }*/

    show(pelis){
        //Variar DOM del contenedor principal
        this.content.innerHTML = ""

        //Recorrer y mostrar todos los objetos del LocalStorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peli_template(peli)
        });

        //Funcionalidad botones de borrado
        _delete()

        //Funcionalidad botones de edición
        edit()
    }

}