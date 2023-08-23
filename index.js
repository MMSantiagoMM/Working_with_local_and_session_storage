
let Nombre = document.querySelector(".nombre-pro")
let Presentacion = document.querySelector(".presentacion-pro")
let Precio = document.querySelector(".precio-pro")
let Imagen = document.querySelector(".imagen-pro")
let Boton = document.querySelector(".boton")
let Buscar = document.querySelector(".buscar")
let lista = []

Boton.addEventListener('click',(event)=>{
    event.preventDefault()
    obtenerDatos()
})

function obtenerDatos(){
    if(!Nombre.value || !Presentacion.value || !Precio.value || !Imagen.value){
        alert("Debes rellenar todos los campos")
        return;
    }
    let datos = {
        nombre: Nombre.value,
        presentacion: Presentacion.value,
        precio : Precio.value,
        imagen : Imagen.value
    }

    console.log(datos)
    guardarDatos(datos)
    
}
let productosEnLocal = "productos"
function guardarDatos(objecto){
    let productos = []
    let productosGuardadosEnLocal = JSON.parse(localStorage.getItem(productosEnLocal))
    if(productosGuardadosEnLocal){
        productos = productosGuardadosEnLocal
    }
    productos.push(objecto)

    localStorage.setItem(productosEnLocal,JSON.stringify(productos))

}

Buscar.addEventListener('click',(event)=>{
    event.preventDefault()
    let busqueda = prompt("Ingrese el nombre del producto")
    let productosGuardadosEnLocal = JSON.parse(localStorage.getItem(productosEnLocal))

    for (let i = 0; i < productosGuardadosEnLocal.length; i++) {
        if(productosGuardadosEnLocal[i].nombre == busqueda){
            console.log(productosGuardadosEnLocal[i])
        }
        
    }
})




