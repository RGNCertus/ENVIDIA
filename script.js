let index = 0;
const imagenes = document.querySelectorAll('.imagen-carrusel');
const totalImagenes = imagenes.length;

function moverCarrusel() {
    index++;
    if (index >= totalImagenes) {
        index = 0; 
    }
 
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moverCarrusel, 3000);
