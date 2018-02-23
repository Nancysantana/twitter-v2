function loadPage() {
  $('#textarea').keyup(textUser);
  $('#textarea').keyup(counterCharacter);
  $('#textarea').keydown(growText);
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

// funcion contador de caracter
function counterCharacter() {
  var countCharacter = document.getElementById('counter');
  var $counter = 0;
  $counter = $('#textarea').val().length;
  countCharacter.value = 140 - $counter;
  // condicionamos el contador
  if ($counter > 140 ) {
    countCharacter.style.color = 'red';
    $('#boton-twitt').attr("disabled", true );
  } else if ($counter >= 120 ) {
    countCharacter.style.color = 'yellow';
  } else if ($counter >= 100 ) {
    countCharacter.style.color = 'purple';
  } else {
    countCharacter.style.color = '#cc00ff';
  }
}

// funcion para crecer el textarea
function growText() {
  $('#textarea').height(100);
}


$(document).ready(loadPage);
