document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-delete')) {
        // Si el botón de eliminar fue clickeado
        const id = event.target.getAttribute('data-id');
        eliminarOdontologo(id);
    }
});

function eliminarOdontologo(id) {
    const url = '/odontologos/' + id;
    const settings = {
        method: 'DELETE'
    };

    fetch(url, settings)
        .then(response => {
            if (response.ok) {
                console.log("Odontólogo eliminado correctamente");
                location.reload();
            } else {
                throw new Error('Error al eliminar el odontólogo');
            }
        })
        .catch(error => console.error('Error:', error));
}