import Storage from "./storage.js"
import List from "./list.js"

export default class Add {

    constructor(){
        //Crear objetos
        this.storage = new Storage()
        this.list = new List()

        //Conseguir elementos del DOM a utilizar (Propiedades)
        this.title = document.querySelector("#title")
        this.description = document.querySelector("#description")
        this.save_btn = document.querySelector("#save")
    }

    //Método para guardar los datos
    peliSave(){
        this.save_btn.onclick = (e) => {
            //Prevenir que se envíe la información
            e.preventDefault()

            //Conseguir datos actualizados
            let pelis = this.storage.getData()
            let lastId = this.storage.getLastId()

            console.log(pelis)
            console.log(lastId)

            //Datos a guardar
            let title = this.title.value
            let description = this.description.value

            //console.log("Clickeado", title, description)
            
            //Pequeña validación
            if(title != "" && description != ""){

                //Crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                }

                //Añadir al array de objetos
                pelis.push(peli)

                //Guardar en el LocalStorage y convertir el objeto a un String almacenable
                this.storage.save(pelis)

                //Actualizar el listado
                //this.list.addToList(peli, pelis)
                this.list.show
                
            }else{
                alert("Introduce bien los datos")
            }

            return false
        }
    }

}