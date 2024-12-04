// Tenperatura bihurtzeko funtzio nagusia
function bihurtuTenperatura() {
    // Erabiltzailearen aukeratutako bihurketa-mota irakurri
    const mota = document.querySelector('input[name="mota"]:checked').value;

    // Erabiltzaileak sartzen duen tenperatura irakurri
    const tenperatura = parseFloat(document.getElementById("tenperatura").value);

    // Bihurtutako tenperaturaren emaitza gordetzeko aldagai bat
    let emaitza;

    // Bihurketa-motaren arabera kalkulatu emaitza
    if (mota === "1") {
        // Celsiusetik Fahrenheitera bihurtu
        emaitza = (tenperatura * 9/5) + 32;
        document.getElementById("emaitza").textContent =
            `${tenperatura} gradu Celsius ${emaitza.toFixed(2)} gradu Fahrenheit dira.`;
    } else if (mota === "2") {
        // Fahrenheitetik Celsiusera bihurtu
        emaitza = (tenperatura - 32) * 5/9;
        document.getElementById("emaitza").textContent =
            `${tenperatura} gradu Fahrenheit ${emaitza.toFixed(2)} gradu Celsius dira.`;
    } else {
        // Aukerarik ez bada aukeratu, errorea erakutsi
        document.getElementById("emaitza").textContent =
            "Mesedez, aukeratu bihurketa-mota bat.";
    }
}
