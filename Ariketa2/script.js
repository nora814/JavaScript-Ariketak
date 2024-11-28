// Obtener los elementos del DOM
const calculateButton = document.getElementById("calculateButton");
const txakurAdinaInput = document.getElementById("txakurAdina");
const erantzuna = document.getElementById("erantzuna");

// Función para calcular la edad del perro en años humanos
function kalkulatuAdina() {
  const txakurAdina = parseInt(txakurAdinaInput.value); // Convertir la entrada a número

  // Validar que el usuario haya ingresado un valor válido
  if (isNaN(txakurAdina) || txakurAdina < 0) {
    erantzuna.innerText = "Mesedez, zenbaki baliodun eta positiboa sartu.";
    erantzuna.style.color = "red"; // Mostrar mensaje de error en rojo
  } else {
    const gizaAdina = txakurAdina * 7; // Calcular edad en años humanos
    erantzuna.innerText = `Txakurrak ${gizaAdina} urte ditu giza urteetan.`; // Mostrar resultado
    erantzuna.style.color = "green"; // Cambiar el color del resultado
  }
}

// Asociar la función al botón
calculateButton.addEventListener("click", kalkulatuAdina);
