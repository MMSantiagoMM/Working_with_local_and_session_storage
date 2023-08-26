let Nombre = document.querySelector(".nombre-pro");
let Presentacion = document.querySelector(".presentacion-pro");
let Precio = document.querySelector(".precio-pro")
let Imagen = document.querySelector(".imagen-pro")
let Boton = document.querySelector(".boton")
let BtnBuscar = document.querySelector(".buscar")
let campoBuscar = document.querySelector('.buscar-pro')
let textoBusqueda = document.querySelector('.textoBusqueda')


Boton.addEventListener('click',()=>{
    guardarDatos()
    alert("Los datos fueron cargados")

})



function guardarDatos(){
    if(!Nombre.value || !Presentacion.value || !Precio.value || !Imagen.value){
        alert("Todos los campos deben de estar llenos")
    }
    let producto={
        nombre: Nombre.value,
        presentacion: Presentacion.value,
        precio: Precio.value,
        imagen: Imagen.value
    }
    cargarDatos(producto)
}

function cargarDatos(object){
    let keyStorage = "productos" 
    let listProducts = []
    let localS = JSON.parse(localStorage.getItem(keyStorage))
    if(localS){
        listProducts = localS
    }
    listProducts.push(object)
    localStorage.setItem(keyStorage,JSON.stringify(listProducts))
}

BtnBuscar.addEventListener('click',(event)=>{
buscarProductos()
    
})

campoBuscar.addEventListener('keydown',(event)=>{
    if( event.key== "Enter"){
        buscarProductos()
        
    }
})

function buscarProductos(){
    let keyStorage = "productos" 
    let localS = JSON.parse(localStorage.getItem(keyStorage))
    let test = localS.find((element)=>element.nombre == campoBuscar.value)
    console.log(test.imagen)
    let v1=test.imagen.split("\\")
    console.log(v1)
    v1=v1.slice(1)
    console.log(v1)
    v1[0]="/img"
    v1=v1.join("/")
    let v2 = document.createElement("img")
    v2.setAttribute('src',v1)
    v2.style = "width:200px"
    textoBusqueda.innerHTML = "Producto: " + test.nombre + "<br>" + "Presentación: " + test.presentacion + "<br>" + "Precio: " + test.precio + "<br>"

    textoBusqueda.appendChild(v2)

    
}