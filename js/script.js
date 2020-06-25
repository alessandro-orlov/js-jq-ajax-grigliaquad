$(document).ready(function() {

  // ================================
  // =========== BONUS ==============

  // Struttura dinamica con handlebars
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var context = { number: ''};
  var html = template(context);

  for (var i = 0; i < 36; i++) {
    $('.container').append(html);
  }


  // Evento click sul quadrato
  $(document).on('click', '.squere', function() {
    // Codesto XD
    var codesto = $(this);

    // CHIAMATA AJAX
    $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(randomNumber) {
          // Inserisco numero random nella variabile
          var numero = randomNumber.response;

          codesto.find('.number').text(numero)
          // Struttura condizionata
          if (numero <= 5) {
            // Resetto le classi
            codesto.removeClass('yellow');
            codesto.removeClass('green');

            // Aggiungo la classe corrispondente
            codesto.addClass('yellow');
          } else {
            // Resetto le classi
            codesto.removeClass('yellow');
            codesto.removeClass('green');

            // Aggiungo la classe corrispondente
            codesto.addClass('green');
          }
        },
        error: function(richiesta, stato, errore) {
          alert('Errore: ' + errore)
        }
      }

    ); // End AJAX

  }); // End click event


}); // END document ready
