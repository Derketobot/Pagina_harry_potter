// varitaToggle.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formularioMagico');
  const btnVarita = document.getElementById('activarVarita');
  const esMago = document.getElementById('esMago');
  const errorVarita = document.getElementById('errorVarita');

  // Inicializamos estado
  esMago.value = 'false';

  btnVarita.addEventListener('click', () => {
    if (esMago.value === 'false') {
      esMago.value = 'true';
      btnVarita.textContent = 'Varita activada 🪄';
      btnVarita.style.boxShadow = '0 0 20px #ffd700';
      btnVarita.style.backgroundColor = '#f0e68c';
      errorVarita.style.display = 'none';
    } else {
      esMago.value = 'false';
      btnVarita.textContent = 'Activar varita mágica';
      btnVarita.style.boxShadow = 'none';
      btnVarita.style.backgroundColor = '';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar campo Nombre (ejemplo simple)
    const nombre = form.querySelector('#nombre').value.trim();
    if (nombre.length < 3) {
      alert('Por favor, ingresa un nombre con al menos 3 caracteres.');
      form.querySelector('#nombre').focus();
      return;
    }

    // Validar email básico
    const correo = form.querySelector('#email').value.trim();
    if (!correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      form.querySelector('#email').focus();
      return;
    }

    // Validar que la varita esté activada
    if (esMago.value !== 'true') {
      errorVarita.style.display = 'block';
      btnVarita.focus();
      return;
    } else {
      errorVarita.style.display = 'none';
    }

    alert('¡Formulario enviado correctamente!');

    form.reset();
    // Reset varita toggle
    esMago.value = 'false';
    btnVarita.textContent = 'Activar varita mágica';
    btnVarita.style.boxShadow = 'none';
    btnVarita.style.backgroundColor = '';
  });
});
