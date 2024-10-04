//Template Strings

nombre = 'Cristian';
apellidos = 'Cardona';
profesion = 'Desarrollador Web';


//Creación de una plantilla dentro de una variable
function ficha(nombre, apellidos, profesion){
    let plantilla = `<h1>${nombre} ${apellidos}</h1>
    ${profesion}
    `;

    return plantilla
}

//Creación de elemento en el HTML desde JS
let cajaFichas = document.createElement("section");
//Modificación de la variable cajaFichas
cajaFichas.innerHTML = ficha('Arnulfo', 'Perez', 'Carterista');
cajaFichas.innerHTML += ficha('Esteban', 'Suarez', 'Carterista');
cajaFichas.innerHTML += ficha('Ernesto', 'Solarte', 'Carterista');
//Añadir al cuerpo del HTML
document.body.appendChild(cajaFichas)