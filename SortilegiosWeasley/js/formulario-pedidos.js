document.addEventListener('DOMContentLoaded', function () {
  const colegioSelect = document.getElementById('colegio');
  const casaSelect = document.getElementById('casa');

  const casasPorColegio = {
    Hogwarts: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'],
    Beauxbatons: ['Papillonlisse', 'Bellefeuille', 'Lugubre'],
    Durmstrang: ['Fuego del Norte', 'Hielo Negro', 'Trueno Carmesí'],
    Ilvermorny: ['Horned Serpent', 'Wampus', 'Thunderbird', 'Pukwudgie']
  };

  colegioSelect.addEventListener('change', function () {
    const colegioSeleccionado = colegioSelect.value;
    console.log('Cambio detectado en colegio:', colegioSeleccionado);

    // Limpiar opciones anteriores
    casaSelect.innerHTML = '<option value="">Selecciona una casa...</option>';

    if (casasPorColegio[colegioSeleccionado]) {
      casasPorColegio[colegioSeleccionado].forEach(casa => {
        const option = document.createElement('option');
        option.value = casa;
        option.textContent = casa;
        casaSelect.appendChild(option);
      });
    }
  });
});
