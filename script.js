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
