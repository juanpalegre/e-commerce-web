/*Resolución API 1

El objetivo es generar dos funciones:
1. Dirigida a devolver una card HTML
2. Dirigida a cargar los datos del producto y generar la card a partir de la función anterior.

Está muy claro, vamos a comenzar.

*/

//Primero vamos a importar el array de productos para que luego podamos ver los datos cargados correctamente en el navegador

import productos from './productos.js';
import agregarAlCarrito from './carrito.js';

//Utilizamos un log para chequear que lo hayamos traido correctamente
console.log(productos);
console.log(agregarAlCarrito);

//Luego declaramos una constante para conectarnos al elemento HTML con el que deseamos trabajar

const container = document.querySelector('.container')

//Creamos la funcion para generar el codigo HTML de cada card

function retornarCardHTML(product) {
    //Utilizo template String y template literals para armar el bloque HTML
    return `<div class="card">
                <div class="card-image">${product.imagen}</div>
                <div class="card-name">${product.nombre}</div>
                <div class="card-price">${product.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id=""
                    title="Clic para agregar al carrito">+</button>  
                </div>`
}

function cargarProductos(array){
    array.forEach(element => {
        container.innerHTML += retornarCardHTML(element)
    });
}

let activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add')
       for (const boton of botonesAgregar){
           boton.addEventListener('click',(event)=>{
               agregarAlCarrito(event.target.id)
       })
    }
}

cargarProductos(productos);
activarClickEnBotones();

