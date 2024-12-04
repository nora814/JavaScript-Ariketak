// DOM-eko elementuak lortu
const calculateButton = document.getElementById("calculateButton"); // Kalkulatzeko botoia
const txakurAdinaInput = document.getElementById("txakurAdina"); // Txakurraren adina sartzeko laukia
const erantzuna = document.getElementById("erantzuna"); // Emaitza bistaratuko den elementua

// Txakurraren adina giza urteetan kalkulatzeko funtzioa
function kalkulatuAdina() {
  const txakurAdina = parseInt(txakurAdinaInput.value); // Erabiltzailearen balioa zenbaki oso bihurtu

  // Erabiltzaileak sartutako balioa baliozkoa dela egiaztatu
  if (isNaN(txakurAdina) || txakurAdina < 0) { 
    // Balioa ez bada zenbaki baliodun bat edo negatiboa bada:
    erantzuna.innerText = "Mesedez, zenbaki baliodun eta positiboa sartu."; // Errore-mezua erakutsi
    erantzuna.style.color = "red"; // Errore-mezua gorriz erakutsi
  } else {
    // Balioa zuzena bada, giza urteetan adina kalkulatu
    const gizaAdina = txakurAdina * 7; // Txakurraren adina 7z biderkatu
    erantzuna.innerText = `Txakurrak ${gizaAdina} urte ditu giza urteetan.`; // Emaitza erakutsi
    erantzuna.style.color = "green"; // Emaitzaren testua berdez erakutsi
  }
}

// Funtzioa botoiari lotu
calculateButton.addEventListener("click", kalkulatuAdina); // Botoia klik egitean kalkulatuAdina funtzioa exekutatu

