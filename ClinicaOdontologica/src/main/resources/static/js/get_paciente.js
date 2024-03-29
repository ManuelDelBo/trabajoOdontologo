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
        ver pacienteRow = table.insertRow();
        let tr_id = 'tr_' + paciente.id;
        pacienteRow.id = tr_id;

        pacienteRow.innerHTML = `
                             <td>${paciente.id}</td>
                             <td>${paciente.nombre.toUpperCase()}</td>
                             <td>${paciente.apellido.toUpperCase()}</td>
                             <td>${paciente.dni}</td>
                             <td>${paciente.calle} ${paciente.numero}, ${paciente.localidad}, ${paciente.provincia}</td>
                        `;
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