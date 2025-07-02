const form = document.getElementById('formularioMagico');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = form.querySelector('#nombre').value.trim();
  const correo = form.querySelector('#email').value.trim();
  const confirmo = form.querySelector('#confirmoMagia').checked;

  if (nombre.length < 3) {
    alert('Por favor, ingresa un nombre con al menos 3 caracteres.');
    form.querySelector('#nombre').focus();
    return;
  }

  if (!correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    form.querySelector('#email').focus();
    return;
  }

  if (!confirmo) {
    alert('Debes confirmar que eres mago para enviar el pedido.');
    form.querySelector('#confirmoMagia').focus();
    return;
  }

  alert('¡Formulario enviado correctamente!');
  form.reset();
});
