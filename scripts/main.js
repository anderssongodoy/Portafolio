// Seleccionar el formulario
const form = document.getElementById('contact-form');

// Función para validar el formulario
function validateForm() {
    // Obtener los campos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // Validar el campo Nombre
    if (nombre.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese su nombre',
        });
        return false;
    }

    // Validar el campo Correo Electrónico
    if (email.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese su correo electrónico',
        });
        return false;
    } else if (!isValidEmail(email.value.trim())) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un correo electrónico válido',
        });
        return false;
    }

    // Validar el campo Mensaje
    if (mensaje.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese su mensaje',
        });
        return false;
    }

    // Si todos los campos son válidos, retornar verdadero
    return true;
}

// Función para validar si un correo electrónico es válido
function isValidEmail(email) {
    // Expresión regular para validar correos electrónicos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

// Agregar el evento submit al formulario
form.addEventListener('submit', function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Validar el formulario
    if (validateForm()) {
        // Si el formulario es válido, enviarlo
        submitForm();
    }
});

// Función para enviar el formulario
function submitForm() {
    // Obtener los campos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // AJAX

    // Mostrar un mensaje de confirmación al usuario
    Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos. Le responderemos lo antes posible.',
        confirmButtonText: 'Aceptar'
    });

    // Limpiar los campos del formulario
    form.reset();
}
