function calcularTarifa(){

    // Pedimos el tiempo en tarifa
    let tHora = parseInt(prompt("Introduce las horas:"))
    let tMin = parseInt(prompt("Introduce los minutos:"))
    let tSeg = parseInt(prompt("Introduce los segundos:"))

    // 10c por llamar y 5c/min en llamada
    let tiempoLlamada = horasASegundos(tHora)+minutosASegundos(tMin)+tSeg;
    let llamada= 10;
    let tarifaLlamada = 5/60  
    let precioTotalCentimos = Math.floor((llamada + (tarifaLlamada*tiempoLlamada))%100);
    let precioTotalEuros = Math.floor((llamada + (tarifaLlamada*tiempoLlamada))/100);

    return console.log(`Tu tarifa es de:  ${precioTotalEuros}€ y ${precioTotalCentimos} centimos`);
}
// Función para convertir horas a segundos
function horasASegundos(horas) {
    return horas * 3600; // Una hora tiene 3600 segundos (60 minutos * 60 segundos)
}

// Función para convertir minutos a segundos
function minutosASegundos(minutos) {
    return minutos * 60; // Un minuto tiene 60 segundos
}

// Funcion que combierte a hexadecimal
function obtenerCaracterHexadecimal(valor) {

    const hexadecimal = valor.toString(16).toUpperCase();    
    return hexadecimal
    
}

function rgbAHexadecimal(){
    alert("A continuacion se te pediran los valores r g b que tienen que estra comprendidos dentro del rango 0 / 255 :")
    let r = parseInt(prompt("introduce el valor r (tiene que ser de dos):"))
    let g = parseInt(prompt("introduce el valor g (tiene que ser de dos):"))
    let b = parseInt(prompt("introduce el valor b (tiene que ser de dos):"))

    if(r <= 0 && r >= 255 && g <= 0 && g >= 255 && b <= 0 && b >= 255){
        console.log("Valor no comprendido")
    }else{
        return console.log(`#${obtenerCaracterHexadecimal(r)}${obtenerCaracterHexadecimal(g)}${obtenerCaracterHexadecimal(b)}`)
    }
}