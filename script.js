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

                                                    /* Barra de menu */
nav ul {
    list-style-type: none;
    background-color: #333;
    padding: 10px;
    margin: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

                                            /* Estilos de los productos */
.producto {
    display: inline-block;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
}

.producto button {
    margin-top: 10px;
}

                                        /* Estilos del carrito emergente */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
}

#carritoEmergente ul {
    list-style-type: none;
    padding: 0;
}

#carritoEmergente li {
    margin-bottom: 10px;
}
