window.addEventListener('load', function () {
    (function(){

      const url = '/turno';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
        for(turno of data){
        var table = document.getElementById("turnoTable");
        var turnoRow = table.insertRow();
        let tr_id = 'tr_' + turno.id;
        turnoRow.id = tr_id;

        turnoRow.innerHTML = `
                             <td>${turno.odontologo.nombre.toUpperCase()}, ${turno.odontologo.apellido.toUpperCase()}</td>
                             <td>${turno.paciente.nombre.toUpperCase()}, ${turno.odontologo.apellido.toUpperCase()}</td>
                             <td>${turno.fecha}</td>
                             <td>${turno.hora}</td>
                        `;
        };
    })
    })
        (function(){
          let pathname = window.location.pathname;
          if (pathname == "/listarTurnos.html") {
              document.querySelector(".nav .nav-item a:last").addClass("active");
          }
        })
    })





