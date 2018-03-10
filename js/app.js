function loadPage() {
  $('#textarea').keyup(textUser);
  $('#textarea').keyup(counterCharacter);
  $('#textarea').keydown(growText);
  $('#boton-twitt').click(addMessage);
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
  // Condicionamos el contador
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

// Funcion para crecer el textarea
function growText() {
  var texTarea = document.getElementById('textarea');
  texTarea.style.height = '50px';
  //El scroll cresera dependiendo del contenido
  texTarea.style.height = texTarea.scrollHeight + 20 + 'px';
  //Si no contiene nungun caracter regrese a su tamaño original
  if (texTarea.value.length === 0) {
      texTarea.style.height = '50px';
  }
}

// Funcion que agrega el mensaje del usuario
function addMessage() {
  //hora del Mensajes
  var time = new Date();
  var hour = time.getHours();
  var ampm = '';
  var minute = time.getMinutes();

  //Si la hora es mayor o igual a 12 publique en PM
  if ( hour >= 12 ){
    hour = hour - 12;
    ampm = 'PM'
  } else { /* Si es menor a 12 publicar AM */
    ampm = 'AM'
  };

  // Si la es 0 se remplazara por el 12AM
  if ( hour === 0 ) {
    hour = 12;
  };

  // Si la publicacion es menor a 10min se concatera el 0
  if ( minute < 10 ) {
    minute = '0' + minute;
  }
  //creando elementos
  var $divContainer = $('<div />', {
    'class' : 'col-md-12'
  });
  var $photoContainer = $('<div />', {
    'class' : 'col-md-2 pl pr'
  });
  var $photoUser = $('<img />', {
    'class' : 'img-responsive photo-rad'
  });
  var $divMessage = $('<div />', {
    'class' : 'col-md-10'
  });
  var $nameUser = $('<p />', {
    'class' : 'fnt-wht'
  });
  var $nameUser2 = $('<span />', {
    'class' : 'fnt-none txt-gray'
  });
  var $dot = $('<span />', {
    'class' : 'fnt-none txt-gray'
  });
  var $time = $('<span />', {
    'class' : 'fnt-none txt-gray'
  });
  var $textTweet = $('<p />');

  //agregando atributos
  $photoUser.attr('src','assets/images/mujer.png');
  $nameUser.text('Nancy Santana');
  $nameUser2.text(' @nan');
  $dot.text(' · ');
  $time.text(hour + ':' + minute + ' ' + ampm);
  $textTweet.text($('#textarea').val());

  //Dom-html
  $photoContainer.append($photoUser);
  $divContainer.append($photoContainer);
  $nameUser.append($nameUser2);
  $nameUser.append($dot);
  $nameUser.append($time);
  $divMessage.append($nameUser);
  $divMessage.append($textTweet);
  $divContainer.append($divMessage);
  $('#container').prepend($divContainer);

  //limpiando contenedores
  $('#textarea').val("");
  var countCharacter = document.getElementById('counter');
  countCharacter.value = 140;
  $('#boton-twitt').attr("disabled", true );
  var texTarea = document.getElementById('textarea');
  texTarea.style.height = '50px';
}


$(document).ready(loadPage);
