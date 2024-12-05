let index = 0;  
const imagenes = document.querySelectorAll('.imagen-carrusel');  
const totalImagenes = imagenes.length;  

function mostrarImagen() {

    imagenes[index].classList.remove('activa');
    
    index++;
    
    if (index >= totalImagenes) {
        index = 0;
    }
    
    imagenes[index].classList.add('activa');
}

mostrarImagen();
setInterval(mostrarImagen, 3000);

/* Catalogo de Productos*/
document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Producto añadido al carrito');
    });
}); 


// Variables globales
let carrito = [];
const carritoLista = document.getElementById("carritoLista");
const totalCarrito = document.getElementById("totalCarrito");
const abrirCarrito = document.getElementById("abrirCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const carritoEmergente = document.getElementById("carritoEmergente");
const botonesAgregar = document.querySelectorAll(".agregarCarrito");

// Función para actualizar el carrito
function actualizarCarrito() {
    carritoLista.innerHTML = ''; // Limpiar la lista del carrito
    let total = 0;

    // Recorrer cada producto en el carrito
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.nombre} - $${item.precio} x ${item.cantidad} 
            <button class="aumentar" data-id="${item.id}">+</button>
            <button class="disminuir" data-id="${item.id}">-</button>
            <button class="eliminar" data-id="${item.id}">Eliminar</button>`;
        carritoLista.appendChild(li);

        // Actualizar total
        total += item.precio * item.cantidad;
    });

    // Mostrar el total en el carrito
    totalCarrito.textContent = total.toFixed(2);
}

// Función para abrir el carrito
abrirCarrito.addEventListener("click", () => {
    carritoEmergente.style.display = "flex";
    actualizarCarrito();
});

// Función para cerrar el carrito
cerrarCarrito.addEventListener("click", () => {
    carritoEmergente.style.display = "none";
});

// Función para agregar un producto al carrito
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        const producto = boton.parentElement;
        const id = producto.getAttribute("data-id");
        const nombre = producto.getAttribute("data-nombre");
        const precio = parseFloat(producto.getAttribute("data-precio"));

        // Verificar si el producto ya está en el carrito
        const index = carrito.findIndex(item => item.id === id);
        if (index === -1) {
            carrito.push({ id, nombre, precio, cantidad: 1 });
        } else {
            carrito[index].cantidad++;
        }

        actualizarCarrito();
    });
});

// Función para aumentar la cantidad de un producto
carritoLista.addEventListener("click", (e) => {
    if (e.target.classList.contains("aumentar")) {
        const id = e.target.getAttribute("data-id");
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1) {
            carrito[index].cantidad++;
        }
    }

    if (e.target.classList.contains("disminuir")) {
        const id = e.target.getAttribute("data-id");
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1 && carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        }
    }

    if (e.target.classList.contains("eliminar")) {
        const id = e.target.getAttribute("data-id");
        carrito = carrito.filter(item => item.id !== id);
    }

    actualizarCarrito();
});
