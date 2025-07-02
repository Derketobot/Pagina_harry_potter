// ⚡ Chispa mágica ya aplicada con hover CSS

// 🧙‍♂️ Formulario Identidad Mágica
document.getElementById("form-identidad").addEventListener("submit", function (e) {
  e.preventDefault();
  const esMago = document.getElementById("pregunta1").value === "si" &&
                 document.getElementById("pregunta2").value === "si" &&
                 document.getElementById("noSoyMuggle").checked;
  const resultado = document.getElementById("resultado-identidad");
  resultado.innerHTML = esMago
    ? "🧙‍♂️ ¡Eres un mago verdadero!"
    : "🙈 Eres un muggle, lo sentimos...";
  resultado.classList.add("animado-varita");
  setTimeout(() => resultado.classList.remove("animado-varita"), 1500);
});

// ✨ Animación con varita (agrega clase con glow)
const estilo = document.createElement('style');
estilo.innerHTML = `
  .animado-varita {
    animation: chispa-varita 1s ease-in-out;
    color: #ffd700;
    text-shadow: 0 0 10px #ffd700, 0 0 20px #ffec8b;
  }
  @keyframes chispa-varita {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 0.8; }
  }
`;
document.head.appendChild(estilo);

// 🔮 Hechizo del Día aleatorio
const hechizos = [
  { nombre: "Lumos", descripcion: "Enciende la punta de la varita para iluminar lugares oscuros." },
  { nombre: "Alohomora", descripcion: "Abre puertas y cerraduras cerradas con magia." },
  { nombre: "Wingardium Leviosa", descripcion: "Permite levitar objetos y moverlos a distancia." },
  { nombre: "Expecto Patronum", descripcion: "Invoca un Patronus que repele criaturas oscuras." },
  { nombre: "Accio", descripcion: "Llama objetos hacia ti desde la distancia." },
  { nombre: "Expelliarmus", descripcion: "Desarma a tu oponente haciendo que su varita vuele." },
  { nombre: "Incendio", descripcion: "Produce fuego mágico desde la punta de la varita." }
];

const hechizoSeleccionado = hechizos[Math.floor(Math.random() * hechizos.length)];
document.getElementById("texto-hechizo").textContent = "📜 Hechizo: " + hechizoSeleccionado.nombre;
document.getElementById("descripcion-hechizo").textContent = hechizoSeleccionado.descripcion;

// 🧩 Minijuego Horrocrux
const areaJuego = document.getElementById("area-juego");
const resultadoJuego = document.getElementById("resultado-horrocrux");

function aparecerHorrocrux() {
  const horrocrux = document.createElement("div");
  horrocrux.style.width = "40px";
  horrocrux.style.height = "40px";
  horrocrux.style.background = "url('imagenes/horrocrux2.png') center/cover no-repeat";
  horrocrux.style.position = "absolute";
  horrocrux.style.top = `${Math.random() * 150}px`;
  horrocrux.style.left = `${Math.random() * (areaJuego.offsetWidth - 40)}px`;
  horrocrux.style.cursor = "pointer";
  horrocrux.title = "¡Haz clic!";
  horrocrux.classList.add("horrocrux");

  horrocrux.addEventListener("click", () => {
    resultadoJuego.textContent = "¡Encontraste el Horrocrux! 🪄";
    areaJuego.innerHTML = "";
  });

  areaJuego.innerHTML = "";
  areaJuego.appendChild(horrocrux);
  setTimeout(() => {
    if (areaJuego.contains(horrocrux)) {
      resultadoJuego.textContent = "¡Se ha desvanecido! 😱";
      areaJuego.innerHTML = "";
    }
  }, 2500);
}

setInterval(aparecerHorrocrux, 7000);

// 🌙 Modo Oscuro
document.getElementById("modo-oscuro").addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
});

