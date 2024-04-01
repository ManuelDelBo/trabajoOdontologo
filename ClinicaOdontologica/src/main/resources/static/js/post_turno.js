window.addEventListener('load', function () {
    const formulario = document.querySelector('#add_new_turno');
    fetch('/paciente')
        .then(response => response.json())
        .then(pacientes => {
            const pacienteSelect = document.getElementById('paciente');
            pacientes.forEach(paciente => {
                const option = document.createElement('option');
                option.value = paciente.id;
                option.textContent = paciente.nombre.toUpperCase() + ' ' + paciente.apellido.toUpperCase();
                pacienteSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error al obtener pacientes:', error));

    fetch('/odontologos')
        .then(response => response.json())
        .then(odontologos => {
            const odontologoSelect = document.getElementById('odontologo');
            odontologos.forEach(odontologo => {
                const option = document.createElement('option');
                option.value = odontologo.id;
                option.textContent = odontologo.nombre.toUpperCase() + ' ' + odontologo.apellido.toUpperCase();
                odontologoSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error al obtener odontólogos:', error));

    formulario.addEventListener('submit', function (event) {
    debugger;
        event.preventDefault();

        const formData = {
            paciente: {
                id: parseInt(document.querySelector('#paciente').value)
            },
            odontologo: {
                id: parseInt(document.querySelector('#odontologo').value)
            },
            fecha: document.querySelector('#date').value,
            hora: document.querySelector('#hora').value
        };

        const url = '/turno';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                let successAlert = '<div class="alert alert-success alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong></strong> Turno agregado </div>';

                document.querySelector('#response').innerHTML = successAlert;
                document.querySelector('#response').style.display = "block";
                resetUploadForm();

            })
            .catch(error => {
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong> Error intente nuevamente</strong> </div>';

                document.querySelector('#response').innerHTML = errorAlert;
                document.querySelector('#response').style.display = "block";
                resetUploadForm();
            });
            console.log(formData);
    });

    function resetUploadForm() {
        document.querySelector('#paciente').value = "";
        document.querySelector('#odontologo').value = "";
        document.querySelector('#date').value = "";
        document.querySelector('#hora').value = "";
    }
});
