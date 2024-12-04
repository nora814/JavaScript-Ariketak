// Formularioaren 'submit' (bidali) ekitaldia entzun
document.getElementById('deskontu-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Formularioa automatikoki bidaltzea ekidin

  // Inputetatik balioak lortu (prezioa eta deskontua)
  const prezioa = parseFloat(document.getElementById('prezioa').value); // Prezioa zenbakira bihurtu
  const deskontua = parseFloat(document.getElementById('deskontua').value); // Deskontua zenbakira bihurtu

  // Balioak baliozkoak direla egiaztatu
  if (isNaN(prezioa) || prezioa <= 0) { // Prezioa ez bada zenbaki positibo bat
    alert('Mesedez, sartu baliozko prezio bat (positiboa eta zenbakizkoa).'); // Errore-mezua erakutsi
    return; // Funtzioa eten
  }
  if (isNaN(deskontua) || deskontua < 0 || deskontua > 100) { // Deskontua ez bada 0 eta 100 artean
    alert('Mesedez, sartu baliozko deskontu ehuneko bat (0 eta 100 artean).'); // Errore-mezua erakutsi
    return; // Funtzioa eten
  }

  // Deskontuaren kopurua kalkulatu
  const deskontatua = prezioa * (deskontua / 100); // Prezioari deskontu ehunekoa aplikatu
  const azkenPrezioa = prezioa - deskontatua; // Prezio originaletik deskontua kendu

  // Emaitza erakutsi
  document.getElementById('result').style.display = 'block'; // Emaitzaren elementua erakutsi
  document.getElementById('final-price').innerText = `Produktua azken prezioa %${deskontua}ko deskontua aplikatu ondoren: ${azkenPrezioa.toFixed(2)} eurokoa da.`; 
  // Azken prezioa bi dezimalekin erakutsi
});

  