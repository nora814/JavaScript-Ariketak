// Obtener los elementos del DOM
const calculateButton = document.getElementById("calculateButton");
const ostatuGastuaInput = document.getElementById("ostatuGastua");
const elikaduraGastuaInput = document.getElementById("elikaduraGastua");
const entretenimenduGastuaInput = document.getElementById("entretenimenduGastua");
const erantzuna = document.getElementById("erantzuna");

// Función para calcular el costo total del viaje
function kalkulatuKostua() {
  // Obtener los valores ingresados por el usuario
  const ostatuGastua = parseFloat(ostatuGastuaInput.value);
  const elikaduraGastua = parseFloat(elikaduraGastuaInput.value);
  const entretenimenduGastua = parseFloat(entretenimenduGastuaInput.value);

  // Validar que todos los valores sean números válidos
  if (isNaN(ostatuGastua) || isNaN(elikaduraGastua) || isNaN(entretenimenduGastua)) {
    erantzuna.innerText = "Mesedez, zenbaki baliodunak sartu.";
    erantzuna.style.color = "red"; // Mostrar mensaje de error en rojo
    return;
  }

  // Calcular el costo total
  const guztizkoKostua = ostatuGastua + elikaduraGastua + entretenimenduGastua;

  // Mostrar el resultado
  erantzuna.innerText = `Bidaiaren guztizko kostua ${guztizkoKostua} €da.`;
  erantzuna.style.color = "green"; // Cambiar el color del resultado
}

// Asociar la función al botón
calculateButton.addEventListener("click", kalkulatuKostua);
