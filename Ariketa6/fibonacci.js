// Fibonacci sekuentziako lehen N terminoak sortzen dituen funtzioa
function sortuFibonacci() {
    // Erabiltzaileak sartutako N balioa hartu
    let n = parseInt(document.getElementById("kopurua").value);

    // Egiaztatu N balioa egokia dela
    if (n <= 0) {
        document.getElementById("emaitza").textContent = "Mesedez, sartu 1 edo handiago den zenbaki bat.";
        return;
    }

    // Fibonacci sekuentzia sortzeko array bat
    let fibonacci = [];

    // Lehenengo N terminoak kalkulatu
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0); // Lehen terminoa 0 da
        } else if (i === 1) {
            fibonacci.push(1); // Bigarren terminoa 1 da
        } else {
            // Hurrengo terminoa aurreko bi terminoen batura da
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }

    // Emaitza erakutsi
    document.getElementById("emaitza").textContent =
        `Fibonacci sekuentziako lehen ${n} terminoak hauek dira: ${fibonacci.join(", ")}.`;
}
