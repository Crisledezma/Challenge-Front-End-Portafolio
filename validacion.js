window.onload = init;

function init(){

  var btnSubmit = document.getElementById('btnSubmit');

  function validar(){
    validarNombre();
    validarCorreo();
    validarAsunto();
    validarMensaje();
  }
  
  function validarNombre(){
    var nombre = document.getElementById('nombre');
    if(!nombre.value){
      nombre.classList.add('atencion');
      nombre.placeholder = 'Debe Ingresar un Nombre'
    }else if(nombre.value.length>50){
      nombre.classList.add('atencion');
      nombre.value = '';
      nombre.placeholder = 'Nombre debe tener menos de 50 caracteres'
    }else{
      nombre.classList.remove('atencion');
      ok = true;
    }
  }

  function validarCorreo(){
    var email = document.getElementById('email');
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!(emailRegex.test(email.value))){
      email.classList.add('atencion');
      email.placeholder = 'Debe Ingresar un correo Válido'
    }else{
      email.classList.remove('atencion');
      ok = true;
    }
  }

  function validarAsunto(){
    var asunto = document.getElementById('asunto');
    if(!asunto.value){
      asunto.classList.add('atencion');
      asunto.placeholder = 'Debe Ingresar un asunto'
    }else if(asunto.value.length > 50){
      asunto.classList.add('atencion');
      asunto.value = '';
      asunto.placeholder = 'Asunto debe tener menos de 50 caracteres';
    }else{
      asunto.classList.remove('atencion');
      ok = true;
    }
  }

  function validarMensaje(){
    var mensaje = document.getElementById('mensaje');
    if(!mensaje.value){
      mensaje.classList.add('atencion');
      mensaje.placeholder = 'Debes ingresar un mensaje';
    }else if(mensaje.value.length > 300){
      mensaje.classList.add('atencion');
      mensaje.value = ''
      mensaje.placeholder = 'El Mensaje debe tener menos de 300 caracteres'
    }else{
      mensaje.classList.remove('atencion');
      ok = true;
    }
  }

  btnSubmit.addEventListener('click', validar);
}