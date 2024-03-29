window.addEventListener('load', function () {

const formulario = document.querySelector('#add_new_paciente');

formulario.addEventListener('submit', function (event) {
const formData = {
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            dni: document.querySelector('#dni').value,
            date: document.querySelector('#date').value,
            calle: document.querySelector('#calle').value,
            numero: Number(document.querySelector('#numero').value),
            localidad: document.querySelector('#localidad').value,
            provincia: document.querySelector('#provincia').value,
            };

           const url = '/paciente';
           const settings = {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData)
           }
           fetch(url, settings)
                       .then(response => response.json())
                       .then(data => {
                                let successAlert = '<div class="alert alert-success alert-dismissible">' +
                                '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                '<strong></strong> Odontólogo agregado </div>'

                            document.querySelector('#response').innerHTML = successAlert;
                            document.querySelector('#response').style.display = "block";
                            resetUploadForm();

                       })
                       .catch(error => {
                               //Si hay algun error se muestra un mensaje diciendo que el odontólogo
                               //no se pudo guardar y se intente nuevamente
                               let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                                '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                                '<strong> Error intente nuevamente</strong> </div>'

                                 document.querySelector('#response').innerHTML = errorAlert;
                                 document.querySelector('#response').style.display = "block";
                                //se dejan todos los campos vacíos por si se quiere ingresar otro odontólogo
                                resetUploadForm();})


});
    function resetUploadForm(){
        document.querySelector('#nombre').value = "";
        document.querySelector('#apellido').value = "";
        document.querySelector('#dni').value = "";
        document.querySelector('#date').value = "";
        document.querySelector('#calle').value = "";
        document.querySelector('#numero').value = "";
        document.querySelector('#localidad').value = "";
        document.querySelector('#provincia').value = "";

    }

    (function(){
        let pathname = window.location.pathname;
        if(pathname === "/"){
            document.querySelector(".nav .nav-item a:first").addClass("active");
        } else if (pathname == "/dentistList.html") {
            document.querySelector(".nav .nav-item a:last").addClass("active");
        }
    })();
});