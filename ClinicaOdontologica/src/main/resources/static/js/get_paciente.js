window.addEventListener('load', function () {
    (function(){

      const url = '/paciente';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
        for(paciente of data){
        var table = document.getElementById("pacienteTable");
        var pacienteRow = table.insertRow();
        let tr_id = 'tr_' + paciente.id;
        pacienteRow.id = tr_id;

        pacienteRow.innerHTML =
                             '<td class=\"td_id\">' + paciente.id + '</td>' +
                             '<td class=\"td_nombre\">' + paciente.nombre.toUpperCase() + '</td>' +
                             '<td class=\"td_apellido\">' + paciente.apellido.toUpperCase() + '</td>' +
                             '<td class=\"td_dni\">' + paciente.dni + '</td>' +
                             '<td class="td_calle">' + paciente.domicilio.calle.toUpperCase() + ' ' + paciente.domicilio.numero + ', ' + paciente.domicilio.localidad.toUpperCase() + ', ' + paciente.domicilio.provincia.toUpperCase() + '</td>' +
                             '<td><button type="button" class="btn btn-danger btn-delete" data-id="' + paciente.id + '">X</button></td>'
                        ;
        };
    })
    })
        (function(){
          let pathname = window.location.pathname;
          if (pathname == "/listarPacientes.html") {
              document.querySelector(".nav .nav-item a:last").addClass("active");
          }
        })
    })