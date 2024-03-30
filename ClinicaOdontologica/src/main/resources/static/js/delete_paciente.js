document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn-delete')) {
        const id = event.target.getAttribute('data-id');
        eliminarPaciente(id);
    }
});

function eliminarPaciente(id) {
    const url = '/paciente/' + id;
    const settings = {
        method: 'DELETE'
    };

    fetch(url, settings)
        .then(response => {
            if (response.ok) {
                console.log("Pacinete eliminado correctamente");
                location.reload();
            } else {
                throw new Error('Error al eliminar el paciente');
            }
        })
        .catch(error => console.error('Error:', error));
}