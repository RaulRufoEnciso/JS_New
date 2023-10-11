function obtenerCaracterHexadecimal(valor) {
    if (valor < 10) {
        return valor.toString();
    } else {
        // A: 10, B: 11, ..., F: 15
        return String.fromCharCode(65 + (valor - 10));
    }
    
    }
    
    function convertirBaseNumerica(numeroDecimal, base) {

    if (isNaN(numeroDecimal) && isNaN(base)) {
        console.log('Por favor, ingrese un número válido.');
        return;
    }
    
    // Declarar variables
    let numeroConvertido = '';
    let cociente = numeroDecimal;
    
    // Comprobacion para el caso del 0 / Si es 0 el numero ingresado devuelve 0
    if(numeroDecimal==0){
        numeroConvertido = 0;
    }else{
        while (cociente > 0) {
            const resto = cociente % base;
            cociente = Math.floor(cociente / base);
            if (base !== 16) {
                numeroConvertido = resto + numeroConvertido;
            }
            else{
                numeroConvertido = obtenerCaracterHexadecimal(resto) + numeroConvertido;
            }
        }
    
    return console.log(`El número en base ${base} es: ${numeroConvertido}`);
    
    }
    }
    function convierteTodos(){

        let numeroDecimal = parseInt(prompt('Ingrese un número en base 10:'))

        convertirBaseNumerica(numeroDecimal, parseInt(prompt('Ingrese el número de la base (2,8,16):')))
        convertirBaseNumerica(numeroDecimal, parseInt(prompt('Ingrese el número de la base (2,8,16):')))
        convertirBaseNumerica(numeroDecimal, parseInt(prompt('Ingrese el número de la base (2,8,16):')))

    }
    
    
    
    
    



