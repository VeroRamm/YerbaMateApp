const formulario = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const texto = document.getElementById('texto');
let error = document.getElementById('error');
let mensajeError = [];

function validarNombre() {
	if(nombre.value.length < 3|| nombre.value ==0) {
		mensajeError.push('El nombre no puede estar vacio.');
		nombre.style.border = '1px solid red';
	}
}
function validarApellido() {
	if(apellido.value.length == 0) {
		mensajeError.push('El apellido no puede estar vacio.');
		apellido.style.border = '1px solid red';
	}
}
function validarEmail() {
	if (!email.value.includes('@')||!email.value.includes('.')) {
		mensajeError.push('Por favor ingrese un email valido');
		email.style.border = '1px solid red';
	} 
}
function validarTexto() {
	if(texto.value.length ==0) {
		mensajeError.push('Debe escribir su consulta o sugerencia.');
		texto.style.border = '1px solid red';
	}
}
formulario.addEventListener('submit', function(e) {
	e.preventDefault();
	validarNombre();
	validarApellido();
	validarEmail();
	validarTexto();
	if (mensajeError.length > 0) {
		error.innerHTML = mensajeError.join('<br>');
		setTimeout((mensajeError) => {
			alert('Vuelva a ingresar los datos.');
			formulario.submit();
		}, 2000);
	} else {
	alert('Formulario enviado');
		formulario.submit();
	}
});