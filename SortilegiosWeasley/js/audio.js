const toggleSonidoBtn = document.getElementById('toggle-sonido');
let sonidoActivado = true;

// Carga el sonido
const sonidoChispa = new Audio('ruta/a/tu/sonido-chispa.mp3'); // Cambia por tu archivo real

toggleSonidoBtn.addEventListener('click', () => {
  sonidoActivado = !sonidoActivado;
  toggleSonidoBtn.textContent = sonidoActivado ? '🔊 Sonido ON' : '🔇 Sonido OFF';
});

// Sonido al hacer clic en la página
document.addEventListener('click', () => {
  if (sonidoActivado) {
    sonidoChispa.currentTime = 0;
    sonidoChispa.play();
  }
});
