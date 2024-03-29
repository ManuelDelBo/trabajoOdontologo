window.addEventListener('load', function () {
    const formulario = document.querySelector('#update_dentist_form');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            id: document.querySelector('#odontologo_id').value,
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            matricula: document.querySelector('#matricula').value,
        };
        const id = formData.id;

        let url;

        if (id !== undefined && id !== null) {
            if (!isNaN(id) && parseInt(id) > 0) {
                url = '/odontologos/' + id;
                console.log('URL construida:', url);
            } else {
                console.error('formData.id no es un ID válido:', id);
                return; // Salir de la función si el ID no es válido
            }
        } else {
            console.error('formData.id no está definido o es nulo');
            return; // Salir de la función si el ID no está definido o es nulo
        }

        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };

        fetch(url, settings)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al actualizar el odontólogo');
                }
                return response.json();
            })
            .then(data => {
                console.log('Odontólogo actualizado:', data);
                window.location.href = 'listarOdontologos.html';
            })
            .catch(error => {
                console.error('Error al actualizar el odontólogo:', error);
                alert('Error al actualizar el odontólogo');
            });
    });
});