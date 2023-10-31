// 65839522 correcto
// 65839521 incorrecto
// 5029365779425 correcto
// 5129365729425 incorrecto

function codigoBarras(){
    let codigo = prompt("Inserta el codigo: ")
    
    let codigoconZero;
    if(codigo.length>13){
        alert("Mas de 13 no se acepta");
        console.log("¡ERROR!");
    }else{
        if (codigo.length <= 8){
            codigoconZero = addleftZeropadding(codigo, 8);
        }else{
            if (codigo.length > 8 && codigo.length <=13) {
                codigoconZero = addleftZeropadding(codigo, 13);
            }
        }
    }
    // console.log("Codigo con ceros: "+codigoconZero);
    let confirmacion = checkDigitControl(codigoconZero);
    // console.log(confirmacion)

    // Obtener la longitud de la cadena
    let longitud = codigoconZero.length;
    // Obtener el último carácter
    let ultimoCaracter = codigoconZero[longitud - 1];
    // console.log(ultimoCaracter);
    if(confirmacion == ultimoCaracter){
        alert("Es correcto :D");
        console.log("Eureca !");
    }else{
        alert("Es incorrecto D:");
        console.log("Esto no va bien ! D:<");
    }
}

function addleftZeropadding(code, max) {
    let cadenaConCeros = code.padStart(max, '0');
    // console.log(cadenaConCeros)
    return cadenaConCeros;
}

function checkDigitControl(code) {
    let p = 0;
    let sum = 0;
    for (let i = code.length-2 ; i >= 0; i--) {
        p += 1;
        if (p % 2 === 0) { // Calculo de los pares
            sum += parseInt(code[i]);
            // console.log("Soy par");
        }else { // Calculo impares
            sum += parseInt(code[i]) * 3;
            // console.log("Soy inpar");
        }
    }
    let control = (10 - (sum % 10)) %10;
    // console.log("Dijito de control "+  control );
    return control;

}
function stringToArray(cadena) {
    let miArray = [...cadena];
    return miArray;
}
