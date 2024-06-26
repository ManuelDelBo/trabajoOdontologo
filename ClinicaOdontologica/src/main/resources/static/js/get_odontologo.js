window.addEventListener('load', function () {
    (function(){

      const url = '/odontologos';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
         for(dentist of data){
            var table = document.getElementById("dentistTable");
            var dentistRow = table.insertRow();
            let tr_id = 'tr_' + dentist.id;
            dentistRow.id = tr_id;

            dentistRow.innerHTML =
                    '<td class=\"td_id\">' + dentist.id + '</td>' +
                    '<td class=\"td_nombre\">' + dentist.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_apellido\">' + dentist.apellido.toUpperCase() + '</td>' +
                    '<td class=\"td_matricula\">' + dentist.matricula + '</td>' +
                    '<td><button type="button" class="btn btn-danger btn-delete" data-id="' + dentist.id + '">X</button></td>'
                    ;

        };

    })
    })

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/listarOdontologos.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })
})