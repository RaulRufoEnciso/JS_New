function diasA() {
    const diasTotales = parseInt(prompt('Ingrese un número de días:'));
  
    if (isNaN(diasTotales) || diasTotales < 0) {
      console.log('Por favor, ingrese un número válido de días.');
      return;
    }
  
    const anys = Math.floor(diasTotales / 365);
    const diasRestantes = diasTotales % 365;
    const meses = Math.floor(diasRestantes / 30);
    const dias = diasRestantes % 30;
  
    return console.log(`Equivalencia en años, meses y días: \nAños: ${anys} \nMeses: ${meses}  \nDías: ${dias}`);
  }
  
  function convertirTemperatura() {
    const unidad = prompt('Ingrese C para Celsius o F para Fahrenheit:').toUpperCase();
  
    if (unidad !== 'C' && unidad !== 'F') {
      console.log('Opción no válida. Por favor, ingrese C o F.');
      return;
    }
  
    const temperatura = parseFloat(prompt('Ingrese la temperatura:'));
  
    if (isNaN(temperatura)) {
      console.log('Por favor, ingrese una temperatura válida.');
      return;
    }
  
    let temperaturaConvertida;
  
    if (unidad === 'C') {
      // Celsius a Fahrenheit: F = C * 9/5 + 32
      temperaturaConvertida = temperatura * 9/5 + 32;
      return console.log(`La temperatura en Fahrenheit es: ${temperaturaConvertida} °F`);
    } else {
      // Fahrenheit a Celsius: C = (F - 32) * 5/9
      temperaturaConvertida = (temperatura - 32) * 5/9;
      return console.log(`La temperatura en Celsius es: ${temperaturaConvertida} °C`);
    }
  }
  
  function obtenerCaracterHexadecimal(valor) {
    if (valor < 10) {
        return valor.toString();
    } else {
        // A: 10, B: 11, ..., F: 15
        return String.fromCharCode(65 + (valor - 10));
    }
  
    
  }

  function convertirBaseNumerica() {
    const numeroDecimal = parseInt(prompt('Ingrese un número en base 10:'));

    if (isNaN(numeroDecimal)) {
        console.log('Por favor, ingrese un número válido.');
        return;
    }

    // Convertir a hexadecimal
    let numeroHexadecimal = '';
    let cociente = numeroDecimal;

    // Comprobacion para el caso del 0 / Si es 0 el numero ingresado devuelve 0
    if(numeroDecimal==0){
      numeroHexadecimal = 0
    }else{
      while (cociente > 0) {
        const resto = cociente % 16;
        cociente = Math.floor(cociente / 16);
        numeroHexadecimal = obtenerCaracterHexadecimal(resto) + numeroHexadecimal;
    }
    }

    // Convertir a octal
    let numeroOctal = '';
    cociente = numeroDecimal;

    // Comprobacion para el caso del 0 / Si es 0 el numero ingresado devuelve 0
    if(numeroDecimal==0){
      numeroOctal=0
    }else{
      while (cociente > 0) {
        const resto = cociente % 8;
        cociente = Math.floor(cociente / 8);
        numeroOctal = resto + numeroOctal;
    }
    }

    // Convertir a binario
    let numeroBinario = '';
    cociente = numeroDecimal;

    // Comprobacion para el caso del 0 / Si es 0 el numero ingresado devuelve 0
    if(numeroDecimal==0){
      numeroBinario=0
    }else{
      while (cociente > 0) {
        const resto = cociente % 2;
        cociente = Math.floor(cociente / 2);
        numeroBinario = resto + numeroBinario;
      }
    }
    

    return console.log(`El número en hexadecimal es: ${numeroHexadecimal} \nEl número en octal es: ${numeroOctal} \nEl número en binario es: ${numeroBinario}`);

    }

  

  
 
  