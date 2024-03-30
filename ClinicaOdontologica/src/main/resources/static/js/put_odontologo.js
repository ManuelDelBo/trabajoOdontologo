window.addEventListener('load', function () {
    const formulario = document.querySelector('#update_dentist_form');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const id = document.querySelector('#id').value

        document.querySelector('#odontologo_id').value = id;

        const formData = {
            id: id,
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            matricula: document.querySelector('#matricula').value,
        };
        const url = '/odontologos/' + id;

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