document.getElementById('gmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de los inputs
    const pisua = parseFloat(document.getElementById('pisua').value);
    const altuera = parseFloat(document.getElementById('altuera').value);
  
    // Validar los valores
    if (isNaN(pisua) || pisua <= 0) {
      alert('Mesedez, sartu baliozko pisua (positiboa eta zenbakizkoa).');
      return;
    }
    if (isNaN(altuera) || altuera <= 0) {
      alert('Mesedez, sartu baliozko altuera (positiboa eta zenbakizkoa).');
      return;
    }
  
    // Kalkulatu GMIa
    const GMI = pisua / (altuera ** 2);
  
    // Clasificación
    let classification = '';
    if (GMI < 18.5) {
      classification = 'Pisua txikia';
    } else if (GMI >= 18.5 && GMI <= 24.9) {
      classification = 'Pisua normala';
    } else if (GMI >= 25 && GMI <= 29.9) {
      classification = 'Gehiegizko pisua';
    } else {
      classification = 'Obesitatea';
    }
  
    // Mostrar el resultado
    document.getElementById('gmi-result').style.display = 'block';
    document.getElementById('gmi-text').innerText = `Zure GMIa ${GMI.toFixed(2)} da.`;
    document.getElementById('classification').innerText = `Sailkapena: ${classification}`;
  });
  