let Nombre = document.querySelector(".nombre-pro");
let Presentacion = document.querySelector(".presentacion-pro");
let Precio = document.querySelector(".precio-pro")
let Imagen = document.querySelector(".imagen-pro")
let Boton = document.querySelector(".boton")
let BtnBuscar = document.querySelector(".buscar")
let campoBuscar = document.querySelector('.buscar-pro')
let textoBusqueda = document.querySelector('.textoBusqueda')
let table = document.querySelector('.table tbody')
let botonActualizar = document.querySelector('.botonTwo')


function buscarProductos() {
    let keyStorage = "productos"
    let localS = JSON.parse(localStorage.getItem(keyStorage))
    let test = localS.find((element) => element.nombre == campoBuscar.value)

    /* let v1 = test.imagen.split("\\")
    console.log(v1)
    v1 = v1.slice(1)
    console.log(v1)
    v1[0] = "/img"
    v1 = v1.join("/")
    let v2 = document.createElement("img")
    v2.setAttribute('src', v1)
    v2.style = "width:200px" */
    textoBusqueda.innerHTML = `Producto: ${test.nombre} <br> Presentación: ${test.presentacion} <br> Precio:   ${test.precio} <br><img src="${test.imagen}" width="40%">`
    textoBusqueda.appendChild(v2)
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarDatos()
})
BtnBuscar.addEventListener('click', () => {
    buscarProductos()
})

Boton.addEventListener('click', () => {
    guardarDatos()
    alert("Los datos fueron cargados")
    limpiarTable()
    mostrarDatos()
    Nombre.value = ""
    Presentacion.value = ""
    Precio.value = ""
    Imagen.value = ""

})

campoBuscar.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        buscarProductos()
    }
})

function guardarDatos() {
    if (!Nombre.value || !Presentacion.value || !Precio.value || !Imagen.value) {
        alert("Todos los campos deben de estar llenos")
    }
    let producto = {
        nombre: Nombre.value,
        presentacion: Presentacion.value,
        precio: Precio.value,
        imagen: Imagen.value
    }
    cargarDatos(producto)
}
function cargarDatos(object) {
    let keyStorage = "productos"
    let listProducts = []
    let localS = JSON.parse(localStorage.getItem(keyStorage))
    if (localS) {
        listProducts = localS
    }
    listProducts.push(object)
    localStorage.setItem(keyStorage, JSON.stringify(listProducts))
}

function mostrarDatos() {
    let keyStorage = "productos"
    let listProducts = []
    let localS = JSON.parse(localStorage.getItem(keyStorage))
    if (localS) {
        listProducts = localS
    }
    listProducts.forEach((item, index) => {
        let fila = document.createElement('tr')
        fila.innerHTML = `
        <td>${index} </td>
        <td>${item.nombre} </td>
        <td>${item.presentacion} </td>
        <td>${item.precio} </td>
        <td><img src="${item.imagen}" width="30%"></td>
        <td>
            <span onclick="editarPro(${index})"class="btn btn-success">Editar</span>  
            <span onclick="btnEliminar(${index})" class="btn btn-danger"> Eliminar </span> 
        </td>
        `
        table.appendChild(fila)
    });
}

function limpiarTable() {
    let filastable = document.querySelectorAll('.table tbody tr')
    for (let i = 0; i < filastable.length; i++) {
        filastable[i].remove()
    }
}

function btnEliminar(position) {
    let keyStorage = "productos"
    let listProducts = []
    let localS = JSON.parse(localStorage.getItem(keyStorage))
    if (localS) {
        listProducts = localS
    }
    listProducts.splice(position, 1)
    let confirmar = confirm("Deseas eliminar el producto?")
    if (confirmar) {
        localStorage.setItem(keyStorage, JSON.stringify(listProducts))
        alert("Producto eliminado con exito")
    }

    limpiarTable()
    mostrarDatos()
}

function editarPro(position) {
    
    let keyStorage = "productos"
    let listProducts = []
    let localS = JSON.parse(localStorage.getItem(keyStorage))
    if (localS) {
        listProducts = localS
    }
    Nombre.value = listProducts[position].nombre
    Presentacion.value = listProducts[position].presentacion
    Precio.value = listProducts[position].precio
    Imagen.value = listProducts[position].imagen

    botonActualizar.classList.toggle("d-none")
    Boton.classList.toggle("d-none")



    botonActualizar.addEventListener('click',()=>{
        listProducts[position].nombre = Nombre.value
        listProducts[position].presentacion = Presentacion.value
        listProducts[position].precio = Precio.value
        listProducts[position].imagen = Imagen.value


        localStorage.setItem(keyStorage, JSON.stringify(listProducts))
        alert("Productos actualizados con exito")

           botonActualizar.classList.toggle("d-none")
        Boton.classList.toggle("d-none")
        limpiarTable()
        mostrarDatos()
        Nombre.value = ""
        Presentacion.value = ""
        Precio.value = ""
        Imagen.value = ""
    })
 

}




