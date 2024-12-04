// Formularioaren 'submit' (bidali) ekitaldia entzun
document.getElementById('gmi-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Formularioa automatikoki bidaltzea ekidin

  // Inputetako balioak lortu (pisua eta altuera)
  const pisua = parseFloat(document.getElementById('pisua').value); // Pisua zenbakira bihurtu
  const altuera = parseFloat(document.getElementById('altuera').value); // Altuera zenbakira bihurtu

  // Balioak baliozkoak direla egiaztatu
  if (isNaN(pisua) || pisua <= 0) { // Pisua ez bada zenbaki positibo bat
    alert('Mesedez, sartu baliozko pisua (positiboa eta zenbakizkoa).'); // Errore-mezua erakutsi
    return; // Funtzioa eten
  }
  if (isNaN(altuera) || altuera <= 0) { // Altuera ez bada zenbaki positibo bat
    alert('Mesedez, sartu baliozko altuera (positiboa eta zenbakizkoa).'); // Errore-mezua erakutsi
    return; // Funtzioa eten
  }

  // GMIa (Gorputz Masaren Indizea) kalkulatu
  const GMI = pisua / (altuera ** 2); // Formula: pisua / altuera²

  // GMIaren sailkapena erabaki
  let classification = ''; // Hasieratu sailkapena
  if (GMI < 18.5) { // GMI 18.5 baino txikiagoa bada
    classification = 'Pisua txikia';
  } else if (GMI >= 18.5 && GMI <= 24.9) { // GMI 18.5 eta 24.9 bitartean badago
    classification = 'Pisua normala';
  } else if (GMI >= 25 && GMI <= 29.9) { // GMI 25 eta 29.9 bitartean badago
    classification = 'Gehiegizko pisua';
  } else { // GMI 30 edo gehiago bada
    classification = 'Obesitatea';
  }

  // Emaitza erakutsi
  document.getElementById('gmi-result').style.display = 'block'; // Emaitzaren elementua erakutsi
  document.getElementById('gmi-text').innerText = `Zure GMIa ${GMI.toFixed(2)} da.`; // GMIaren balioa erakutsi bi dezimalekin
  document.getElementById('classification').innerText = `Sailkapena: ${classification}`; // Sailkapena erakutsi
});
