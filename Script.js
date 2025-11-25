precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
cantidadSpan = document.querySelector(".cantidad");
totalSpan = document.querySelector(".valor-total");


precioSpan.innerHTML = precio;

// variable de cantidad
let cantidad = 0;

// se ejecuta cuando se presiona en +
function aumentar() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = cantidad * precio;
}

// se ejecuta cuando se presiona en -
function disminuir() {
    if (cantidad > 0) { // solo va a disminuir si la cantidad es mayor que cero
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        totalSpan.innerHTML = cantidad * precio;
    }
}
