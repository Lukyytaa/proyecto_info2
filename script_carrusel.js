const carruselTrack = document.querySelector('.carrusel-track');
const imagenes = document.querySelectorAll('.carrusel-track img');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');

let indiceActual = 0;
const cantidadImagenes = imagenes.length;
const anchoImagen = imagenes[0].clientWidth; // Obtener el ancho de una imagen

function actualizarCarrusel() {
    carruselTrack.style.transform = `translateX(-${indiceActual * anchoImagen}px)`;
}

function siguienteImagen() {
    if (indiceActual < cantidadImagenes - 1) {
        indiceActual++;
    } else {
        indiceActual = 0; // Volver a la primera imagen
    }
    actualizarCarrusel();
}

function anteriorImagen() {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = cantidadImagenes - 1; // Ir a la última imagen
    }
    actualizarCarrusel();
}

botonSiguiente.addEventListener('click', siguienteImagen);
botonAnterior.addEventListener('click', anteriorImagen);

// Asegurar que el ancho de la imagen se recalcule en caso de redimensionamiento de la ventana
window.addEventListener('resize', () => {
    anchoImagen = imagenes[0].clientWidth;
    actualizarCarrusel();
});
