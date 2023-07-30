import productos from "./productos.js"

const almacenarCarrito = () => {
    if( carritoFrutas.length > 0 ){
        let carritoConvertido = JSON.stringify(carritoFrutas)
        localStorage.setItem("carritoFrutas",carritoConvertido)
    }
}

let agregarAlCarrito = (frutaId) => {
    if (frutaId > 0){
        const encontrado = productos.find(producto => producto.id === parseInt(frutaId))
        if(typeof encontrado !== 'undefined') carritoFrutas.push(encontrado)
        almacenarCarrito()
    }
}

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem("carritoFrutas")) || []
}

const carritoFrutas = recuperarCarrito()

console.table(carritoFrutas);

export default agregarAlCarrito;