import Storage from "./storage.js";
import List from "./list.js";

export default function(){

    //Crear objetos
    const storage = new Storage()
    const list = new List()

    //Conseguir elementos DOM
    let content = document.querySelector('#content')
    let search_btn = document.querySelector('#search')

    //Aplicar evento al botón
    search_btn.onclick = (e) => {
        e.preventDefault()//e se usa para evitar que el formulario sea enviado
        
        //Conseguir el texto del input
        let wanted = document.querySelector('#search_field').value

        //Conseguir datos de películas actualizados
        let pelis_stored = storage.getData()

        //Aplicar filtro
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase())
        })

        //Mostrar el listado de coincidencias
        list.show(new_pelis)

        return false//Quitar la funcionalidad por defecto del formulario
    }

}