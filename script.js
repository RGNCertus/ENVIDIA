let carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


function agregarAlCarrito(event) {
    const producto = event.target.closest('.producto');  
    const id = producto.getAttribute('data-id');
    const nombre = producto.getAttribute('data-nombre');
    const precio = parseFloat(producto.getAttribute('data-precio'));


    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }

   
    actualizarCarrito();
}


function actualizarCarrito() {
   
    listaCarrito.innerHTML = '';

   
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nombre} - $${item.precio} x ${item.cantidad}`;
        listaCarrito.appendChild(li);
    });

    
    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    totalCarrito.innerText = `Total: $${total.toFixed(2)}`;
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', agregarAlCarrito);
});

vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
