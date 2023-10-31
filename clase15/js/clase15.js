// Con esto sabremos que dia es toDateString

function findMiercoles() {
    // Perdir los dos años
    let year1 = parseInt(prompt("Ingresa un año entre las fechas [2000 - 2050]: "));
    let year2 = parseInt(prompt("Ingresa otro año entre las fechas [2000 - 2050]: "));
    

    
    if (year1 > year2) {
        alert("El segundo año tiene que ser menor a el primero introducido")
    }else{
        console.log(year1, year2);

        for (let i = year1; i < year2; i++) {
            console.log(year1);
            let yearCursor = new Date(year1,0,1);
            let primerDia = yearCursor.getDay(3);
            if (primerDia == 3) {
                alert(`¡Eureca! El ${year1} empieza en miercoles`);
                return;
            }
            year1 += 1;

        }
    }
}

// voales [/[]/gi,/[]/gi,...]
// text.match(vocales[i]) si es true sigues si es false sales

function pentavocal() {
    let texto = prompt("Escribe una palabra: ")
    let vocales = [/[aáàäâ]/gi,/[eéèëê]/gi,/[iíìïî]/gi,/[oóòöô]/gi,/[uúùüû]/gi];
    let pentavocalica = false;
    for (let i = 0; i < vocales.length; i++) {
        if(texto.match(vocales[i])){
            pentavocalica = true;
        }else{
            pentavocalica = false;
            break;
        }
    }
    if (pentavocalica) {
        alert(`La palabre (${texto}) es Pentavocalica`)
    } else{
        alert(`La palabre (${texto}) NO es Pentavocalica`)

    }
}