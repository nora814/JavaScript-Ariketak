// Zenbaki baten lehen izatea egiaztatzen duen funtzioa
function lehenZenbakiaDa(zenbakia) {
    // 1 edo 1 baino txikiagoak ez dira zenbaki lehenak
    if (zenbakia <= 1) {
        return false;
    }

    // Zatitzaileak bilatu zenbakia 2tik hasita
    for (let i = 2; i <= Math.sqrt(zenbakia); i++) {
        if (zenbakia % i === 0) {
            return false; // Zenbakia beste batez zatigarria bada, ez da lehen
        }
    }

    return true; // Zatitzailerik ez badago, lehen zenbakia da
}

// Bi zenbakiren arteko zenbaki lehenak aurkitzen dituen funtzioa
function aurkituZenbakiLehenak() {
    // Erabiltzaileak sartutako zenbakiak hartu
    let lehenZenbakia = parseInt(document.getElementById("lehenZenbakia").value);
    let bigarrenZenbakia = parseInt(document.getElementById("bigarrenZenbakia").value);

    // Ziurtatu lehen zenbakia txikiagoa dela (beharrezkoa ez den arren ordena zuzena egiteko)
    let hasiera = Math.min(lehenZenbakia, bigarrenZenbakia);
    let bukaera = Math.max(lehenZenbakia, bigarrenZenbakia);

    // Zenbaki lehenak bilatzeko zerrenda
    let zenbakiLehenak = [];

    for (let i = hasiera; i <= bukaera; i++) {
        if (lehenZenbakiaDa(i)) {
            zenbakiLehenak.push(i); // Lehen zenbakia bada, gehitu zerrendara
        }
    }

    // Emaitza erakutsi
    if (zenbakiLehenak.length > 0) {
        document.getElementById("emaitza").textContent = 
            `${hasiera} eta ${bukaera} arteko zenbaki lehenak: ${zenbakiLehenak.join(", ")}.`;
    } else {
        document.getElementById("emaitza").textContent = 
            `${hasiera} eta ${bukaera} artean ez dago zenbaki lehenik.`;
    }
}
