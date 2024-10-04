//Petición Ajax moderna
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(datos => {
        console.log(datos[82].title)
        mostrar(datos)
    })
    .catch(error => {
        console.log('La petición Ajax ha fallado')
    })

//DOM
function mostrar(elementos){
    let cont = document.querySelector("#contenedor")

    elementos.forEach(elemento => {
        let html = `
            <article>
                <h2>${elemento.title}</h2>
                <p>${elemento.body}</p>
            </article>
            </hr>
        `
        cont.innerHTML += html
    });

    return elementos
}