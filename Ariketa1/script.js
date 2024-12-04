// DOM-eko elementuak lortu
const calculateButton = document.getElementById("calculateButton"); // Kalkulatzeko botoia
const ostatuGastuaInput = document.getElementById("ostatuGastua"); // Ostatu-gastua sartzeko laukia
const elikaduraGastuaInput = document.getElementById("elikaduraGastua"); // Elikadura-gastua sartzeko laukia
const entretenimenduGastuaInput = document.getElementById("entretenimenduGastua"); // Entretenimendu-gastua sartzeko laukia
const erantzuna = document.getElementById("erantzuna"); // Emaitza erakusteko elementua

// Bidaiaren guztizko kostua kalkulatzeko funtzioa
function kalkulatuKostua() {
  // Erabiltzaileak sartutako balioak lortu
  const ostatuGastua = parseFloat(ostatuGastuaInput.value); // Ostatu-gastuaren balioa
  const elikaduraGastua = parseFloat(elikaduraGastuaInput.value); // Elikadura-gastuaren balioa
  const entretenimenduGastua = parseFloat(entretenimenduGastuaInput.value); // Entretenimendu-gastuaren balioa

  // Balio guztiak zenbaki baliodunak direla egiaztatu
  if (isNaN(ostatuGastua) || isNaN(elikaduraGastua) || isNaN(entretenimenduGastua)) {
    erantzuna.innerText = "Mesedez, zenbaki baliodunak sartu."; // Errore-mezua bistaratzen du
    erantzuna.style.color = "red"; // Errore-mezua gorriz erakutsi
    return; // Funtzioa eten
  }

  // Guztizko kostua kalkulatu
  const guztizkoKostua = ostatuGastua + elikaduraGastua + entretenimenduGastua;

  // Emaitza erakutsi erabiltzaileari
  erantzuna.innerText = `Bidaiaren guztizko kostua ${guztizkoKostua} €da.`; // Emaitza erakutsi testu gisa
  erantzuna.style.color = "green"; // Emaitzaren testua berdez erakutsi
}

// Funtzioa botoiari lotu
calculateButton.addEventListener("click", kalkulatuKostua); // Botoia klik egitean kalkulatuKostua funtzioa exekutatu

