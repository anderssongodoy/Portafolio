const form = document.getElementById('contact-form');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const asuntoInput = document.getElementById('asunto');
    const mensajeInput = document.getElementById('mensaje');
    const submitButton = document.getElementById('submit-button');

    // Función para validar el formulario
    function validarFormulario() {
      let valido = true;

      // Validar campo Nombre
      const nombreValue = nombreInput.value.trim();
      if (nombreValue === '' || nombreValue.length > 50) {
        document.getElementById('nombre-error').textContent = 'El nombre es obligatorio y debe tener menos de 50 caracteres.';
        valido = false;
      } else {
        document.getElementById('nombre-error').textContent = '';
      }

      // Validar campo Correo
      const correoValue = correoInput.value.trim();
      const correoRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (correoValue === '' || !correoRegExp.test(correoValue)) {
        document.getElementById('correo-error').textContent = 'El correo no es válido.';
        valido = false;
      } else {
        document.getElementById('correo-error').textContent = '';
      }

      // Validar campo Asunto
      const asuntoValue = asuntoInput.value.trim();
      if (asuntoValue === '' || asuntoValue.length > 50) {
        document.getElementById('asunto-error').textContent = 'El asunto es obligatorio y debe tener menos de 50 caracteres.';
        valido = false;
      } else {
        document.getElementById('asunto-error').textContent = '';
      }

      // Validar campo Mensaje
      const mensajeValue = mensajeInput.value.trim();
      if (mensajeValue === '' || mensajeValue.length > 300) {
        document.getElementById('mensaje-error').textContent = 'El mensaje es obligatorio y debe tener menos de 300 caracteres.';
        valido = false;
      } else {
        document.getElementById('mensaje-error').textContent = '';
      }

      // Habilitar o deshabilitar el botón de enviar según la validación
      submitButton.disabled = !valido;

      return valido;
    }

    // Agregar un evento de escucha al formulario
    form.addEventListener('submit', function (e) {
      if (!validarFormulario()) {
        e.preventDefault(); // Evitar el envío del formulario si no es válido
      }
    });

    // Agregar eventos de escucha a los campos de entrada para validar en tiempo real
    nombreInput.addEventListener('input', validarFormulario);
    correoInput.addEventListener('input', validarFormulario);
    asuntoInput.addEventListener('input', validarFormulario);
    mensajeInput.addEventListener('input', validarFormulario);