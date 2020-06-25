$(document).ready(function() {

  $(document).on('click', '.squere', function() {
    var codesto = $(this);

    // codesto.addClass('yellow')

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
            codesto.removeClass('yellow');
            codesto.removeClass('green');
            codesto.addClass('yellow');
          } else {
            codesto.removeClass('yellow');
            codesto.removeClass('green');
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
