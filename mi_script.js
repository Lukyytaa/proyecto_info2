document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById('miBoton');

    miBoton.addEventListener('click', function() {
        alert('¡Hola! Este es un botón interactivo.');
        console.log('Se ha hecho clic en el botón.');
    });
});
