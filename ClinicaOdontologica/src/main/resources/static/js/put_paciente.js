window.addEventListener('load', function () {
    const formulario = document.querySelector('#update_paciente_form');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const id = document.querySelector('#id').value

        document.querySelector('#paciente_id').value = id;

        const formData = {
            id: id,
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            dni: document.querySelector('#dni').value,
            date: document.querySelector('#date').value,
            calle: document.querySelector('#calle').value,
            numero: document.querySelector('#numero').value,
            localidad: document.querySelector('#localidad').value,
            provincia: document.querySelector('#provincia').value,
        };
        const url = '/paciente/' + id;

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
                                throw new Error('Error al actualizar el paciente');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('paciente actualizado:', data);
                            window.location.href = 'listarPacientes.html';
                        })
                        .catch(error => {
                            console.error('Error al actualizar el paciente:', error);
                            alert('Error al actualizar el paciente');
            });
    });
});