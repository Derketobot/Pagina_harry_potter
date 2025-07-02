const canvas = document.getElementById('fuegosArtificiales');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const estrellas = [];

function crearEstrella() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radio: Math.random() * 2 + 1,
    alpha: Math.random(),
    velocidad: Math.random() * 0.5 + 0.1
  };
}

for (let i = 0; i < 100; i++) estrellas.push(crearEstrella());

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  estrellas.forEach(estrella => {
    ctx.beginPath();
    ctx.arc(estrella.x, estrella.y, estrella.radio, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${estrella.alpha})`;
    ctx.fill();
    estrella.alpha += Math.random() * 0.02 - 0.01;
    if (estrella.alpha < 0) estrella.alpha = 0;
    if (estrella.alpha > 1) estrella.alpha = 1;
    estrella.y -= estrella.velocidad;
    if (estrella.y < 0) estrella.y = canvas.height;
  });
  requestAnimationFrame(animar);
}

animar();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animate);
}

autoFireworks();
animate();

