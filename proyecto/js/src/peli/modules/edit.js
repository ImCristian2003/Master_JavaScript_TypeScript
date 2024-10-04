import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    
    //Crear los objetos
    const storage = new Storage()
    const list = new List()

    //Conseguir datos películas
    let pelis_stored = storage.getData()
    let pelis_viewed = document.querySelectorAll(".peli-item")

    //Recorrer películas mostradas
    pelis_viewed.forEach(peli => {

        //Seleccionar boton de editar
        let edit_btn = peli.querySelector(".edit")

        //Asignar onclick
        edit_btn.onclick = function(){

            //Conseguir id de la peli a editar
            const peli_id = parseInt(this.getAttribute("data-id"))

            //Quitar botones antiguos
            edit_btn.remove()
            peli.querySelector(".delete").remove()

            //Añadir trozo de html bajo los botones
            let peli_edit_html = `
                <div class="edit_form">
                    <hr>
                    <h3 class="title">Editar película</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}">
                        <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar">
                    </form>
                </div>
            `

            peli.innerHTML += peli_edit_html

            //seleccionar botón de actualizar
            let update_btn = peli.querySelector(".update")

            //aplicar evento onclick
            update_btn.onclick = function(e) {
                e.preventDefault()

                //Buscar indice de la película
                let index = pelis_stored.findIndex(peli => peli.id === peli_id)

                //Guardar objeto dentro de ese índice
                pelis_stored[index] = {
                    id: peli_id,
                    title: peli.querySelector(".edited_title").value,
                    description: peli.querySelector(".edited_description").value
                }

                //Actualizar LocalStorage
                storage.save(pelis_stored)

                //Volver a mostrar el listado
                list.show(pelis_stored)

                return false
            }

        }

        

    })

        

}