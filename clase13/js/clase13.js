function cuentaCaracteres() {
    let texto = prompt("Escribe un texto: ");
    let caracter = prompt("Escribe un caracter para buscarlo en el texto anterior: ")

    // Verificar si el carácter está en el texto
    const conteo = contarCaracterEnTexto(texto, caracter);

    // Mostrar el resultado en la consola
    if (conteo >= 2 && conteo <= 4) {
        console.log(`El carácter "${caracter}" aparece ${conteo} veces en el texto.`);
    } else {
        if (conteo > 4) {
            console.log(`El carácter "${caracter}" aparece mas de 2 a 4 veces en el texto.`);
        }else{
            console.log(`El carácter "${caracter}" no aparece de 2 a 4 veces en el texto.`);

        }        
    }
    }

    function contarCaracterEnTexto(texto, caracter) {
    let conteo = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === caracter) {
        conteo++;
        }
    }
    return conteo;

}
function analizarTexto() {
    // Solicitar al usuario un texto
    let texto = prompt("Introduce un texto:");
  
    // 1) Texto en mayúsculas
    const textoMayusculas = texto.toUpperCase();
    document.write(`1) Texto en mayúsculas: ${textoMayusculas} <br/>`);
  
    // 2) Texto en minúsculas
    const textoMinusculas = texto.toLowerCase();
    document.write(`2) Texto en minúsculas: ${textoMinusculas} <br/>`);
  
    // 3) Longitud total del texto
    const longitudTexto = texto.length;
    document.write(`3) Longitud total del texto: ${longitudTexto} <br/>`);
  
    // 4) Número de palabras en el texto
    const palabras = texto.split(/\s+/);
    const numeroPalabras = palabras.length;
    document.write(`4) Número de palabras en el texto: ${numeroPalabras} <br/>`);
  
    // 5) Vocales que contiene
    const vocales = texto.match(/[aáàäâeéèëêiíìïîoóòöôuúùüûAÁÀÄÂEÉÈËÊIÍÌÏÎOÓÒÖÔUÚÙÜÛ]/g);
    const vocalesTexto = vocales ? vocales.join(", ") : "Ninguna";
    document.write(`5) Vocales que contiene: ${vocalesTexto} <br/>`);
  
    // 6) Número de vocales que contiene
    const numeroVocales = vocales ? vocales.length : 0;
    document.write(`6) Número de vocales que contiene: ${numeroVocales} <br/>`);
  
    // 7) Frase en "n" líneas sin la primera letra
    console.log(texto.length)
    console.log(texto)
    
    while (texto.length > 0) {
        for (let i = 0; i < texto.length; i++) {
            document.write(`Linea ${texto.length}: ${texto} <br/>`);
            texto = texto.substring(1,texto.length);
        }
    }
    
  }

  function mediaNoche(){
    let horaActual = prompt("establece la hora: ")
    console.log(horaActual);
    let horaActualANumero = horaActual.split(":");
    console.log(parseInt(horaActualANumero));

  }