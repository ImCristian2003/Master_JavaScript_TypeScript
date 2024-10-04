let nombre = 'Cristian'

function mostrarNombre(){

    let apellidos = 'Cardona'

    function mostrarApellidos(){

        let profesion = 'Desarrollador'

        function mostrarProfesion(){

            return nombre + " " + apellidos + " " + profesion

        }

        return mostrarProfesion

    }

    return mostrarApellidos

}

console.log(mostrarNombre()()())