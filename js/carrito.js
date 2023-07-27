import productos from "./productos.js"

//Creamos el array vacío
const carritoFrutas = []

//Creamos la función 
let agregarAlCarrito = (frutaId) => {
    if (frutaId > 0){
        const encontrado = productos.find(producto => producto.id === parseInt(frutaId))
        if(typeof encontrado !== 'undefined') carritoFrutas.push(encontrado)
        console.table(carritoFrutas)
    }
}

export default agregarAlCarrito;