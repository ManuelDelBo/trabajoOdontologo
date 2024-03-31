window.addEventListener('load', function () {
    (function () {
        const url = '/turno';
        const settings = {
            method: 'GET'
        };

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            debugger;
                for (let turno of data) {
                    let table = document.getElementById("turnoTable");
                    let turnoRow = table.insertRow();
                    let tr_id = 'tr_' + turno.id;
                    turnoRow.id = tr_id;

                    turnoRow.innerHTML =
                        '<td class="td_paciente">' + turno.paciente.nombre.toUpperCase() + ' ' + turno.paciente.apellido.toUpperCase() + '</td>' +
                        '<td class="td_odontologo">' + turno.odontologo.nombre.toUpperCase() + ' ' + turno.odontologo.apellido.toUpperCase() + '</td>' +
                        '<td class="td_date">' + turno.fecha + '</td>' +
                        '<td class="td_hora">' + turno.hora + '</td>';
                }
                console.log(turno.paciente);
                console.log(turno.odontologo);
                console.log(turno.paciente.nombre);
                console.log(turno.odontologo.nombre);
            });
    })();
        (function(){
          let pathname = window.location.pathname;
          if (pathname == "/listarTurnos.html") {
              document.querySelector(".nav .nav-item a:last").addClass("active");
          }
        })
    })





