function loadImageWithAjax() {
    var startTime = new Date().getTime();
    
    $.ajax({
        url: 'https://cdn.pixabay.com/photo/2023/09/29/06/57/mountain-8283084_1280.jpg',
        method: 'GET',
        success: function() {
            var endTime = new Date().getTime();
            var duration = endTime - startTime;
            alert('La imagen tardó ' + duration + ' milisegundos en cargar.');
            location.reload(); // Refrescar la página después de mostrar el tiempo
        },
        error: function() {
            alert('Error al cargar la imagen.');
        }
    });
}