function loadPage() {
  $('#textarea').keyup(textUser);
  $('#textarea').keyup(counterCharacter)
}

// funcion que habilita el boton twitt
function textUser() {
  var $buttonDisabled = $('#boton-twitt');

  // Si el valor del textarea es mayor a 0 sin contar espacios vacios habilita el boton
  if ($(this).val().trim().length > 0) {
    $buttonDisabled.removeAttr("disabled");
  } else {
  //Si no tiene ningu valor continue desahabilitado
    $buttonDisabled.attr("disabled", true);
  }
}

function counterCharacter() {
  var countCharacter = document.getElementById('counter');
  var $counter = 0;
  $counter = $('#textarea').val().length;
  countCharacter.value = 140 - $counter;
}

$(document).ready(loadPage);
