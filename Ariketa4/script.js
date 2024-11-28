document.getElementById('deskontu-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de los inputs
    const prezioa = parseFloat(document.getElementById('prezioa').value);
    const deskontua = parseFloat(document.getElementById('deskontua').value);
  
    // Validar los valores
    if (isNaN(prezioa) || prezioa <= 0) {
      alert('Mesedez, sartu baliozko prezio bat (positiboa eta zenbakizkoa).');
      return;
    }
    if (isNaN(deskontua) || deskontua < 0 || deskontua > 100) {
      alert('Mesedez, sartu baliozko deskontu ehuneko bat (0 eta 100 artean).');
      return;
    }
  
    // Kalkulatu deskontua aplikatu ondoren azken prezioa
    const deskontatua = prezioa * (deskontua / 100);
    const azkenPrezioa = prezioa - deskontatua;
  
    // Mostrar el resultado
    document.getElementById('result').style.display = 'block';
    document.getElementById('final-price').innerText = `Produktua azken prezioa %${deskontua}ko deskontua aplikatu ondoren: ${azkenPrezioa.toFixed(2)} eurokoa da.`;
  });
  