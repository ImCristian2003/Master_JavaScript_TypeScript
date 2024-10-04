let nuevoPost = JSON.stringify({
    title: 'El nuevo post de Cristian',
    body: 'Contenido del POST',
    userId: 54
})

fetch('https://jsonplaceholder.typicode.com/posts', { 
    method: 'POST',
    body: nuevoPost,
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(datos => console.log(datos))