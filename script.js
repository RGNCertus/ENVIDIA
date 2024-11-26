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
/*
document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Producto añadido al carrito');
    });
}); */

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalDetalles');
    const cerrar = document.querySelector('.cerrar');
    const botonesDetalles = document.querySelectorAll('.btn-detalles');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalImagen = document.getElementById('modalImagen');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalPrecio = document.getElementById('modalPrecio');

    const productos = {
        homenUno: {
            titulo: "Homen Uno",
            imagen: "1.jpg",
            descripcion: "Procesador core i5, RTX 3050, 8GB RAM, 1TB de almacenamiento.",
            precio: "$700"
        }
    };

    // Funcionalidad de abrir modal con detalles del producto
    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = productos[boton.dataset.producto];
            modalTitulo.textContent = producto.titulo;
            modalImagen.src = producto.imagen;
            modalDescripcion.textContent = producto.descripcion;
            modalPrecio.textContent = `Precio: ${producto.precio}`;
            modal.style.display = 'flex';
        });
    });

    // Cerrar modal
    cerrar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Funcionalidad de añadir al carrito
    document.querySelectorAll('.producto button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Producto añadido al carrito');
        });
    });
});

