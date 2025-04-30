document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.galeria img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            // Aquí puedes agregar la lógica para hacer algo al hacer clic en la imagen
            // Por ejemplo, mostrar la imagen en un modal, abrir un enlace, etc.
            alert('Hiciste clic en: ' + this.alt); // Un ejemplo simple
        });
    });
});
