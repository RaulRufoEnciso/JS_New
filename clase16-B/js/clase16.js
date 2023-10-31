function datosActuales() {
    diaHoy();
    cauntasSemanasLlevamos();
    diasEnPorcentaje();
    diasRestantesPorcentaje();
    horaActual();
    horasPasadasPorcentaje();
    horasQueQuedanPorcentaje();
}

// Que dia es hoy
function diaHoy() {
    let dia = new Date();
    let dd = dia.getDate();
    let mm = dia.getMonth();
    let aaaa = dia.getFullYear();
    console.log(`Hoy es: ${dd}/${mm+1}/${aaaa}`);
}
// Cuantas semanas llevamos de año
function cauntasSemanasLlevamos() {
    // Obtenemos la fecha actual
    let fechaActual = new Date(); 
    // Primer día del año
    let primerDiaDelAnio = new Date(fechaActual.getFullYear(), 0, 1); 
    // Milisegundos en una semana
    let milisegundosEnUnaSemana = 604800000; 

    // Calcula la diferencia en milisegundos entre la fecha actual y el primer día del año
    let diferenciaMilisegundos = fechaActual - primerDiaDelAnio;

    // Calcula el número de semanas transcurridas
    let semanasTranscurridas = Math.floor(diferenciaMilisegundos / milisegundosEnUnaSemana);

    console.log(`Llevamos ${semanasTranscurridas} semanas.`);

}
// Porcentaje de dias transcurridos
function diasEnPorcentaje() {
    // Obtenemos la fecha actual
    let diasTranscurridos = diasDelAnioLlevamos(); 
    // Primer día del año
    let todoElAnio = 365; 
    
    let diasPorcentaje = (diasTranscurridos / todoElAnio) * 100;
    console.log(`Llevamos un ${diasPorcentaje.toFixed(2)}% de dias.`)
}
function diasDelAnioLlevamos() {
    // Obtenemos la fecha actual
    let fechaActual = new Date(); 
    // Primer día del año
    let primerDiaDelAnio = new Date(fechaActual.getFullYear(), 0, 1); 
    // Milisegundos en una semana
    let milisegundosEnUnDia= 86400000; 

    // Calcula la diferencia en milisegundos entre la fecha actual y el primer día del año
    let diferenciaMilisegundos = fechaActual - primerDiaDelAnio;

    // Calcula el número de semanas transcurridas
    let diasTranscurridos = diferenciaMilisegundos / milisegundosEnUnDia;
    return diasTranscurridos;
}
// Porcentaje de dias que quedan
function diasRestantesPorcentaje() {
    let dias =  diasDelAnioLlevamos() - 365;
    let diasRestPorcentaje = (dias / 365) * 100;
    console.log(`Falta ${Math.abs(diasRestPorcentaje.toFixed(2))}% para acabar el año.`)
}
// Que hora es
function horaActual() {
    let hora = new Date();
    let h = hora.getHours();
    let m = hora.getMinutes();
    let s = hora.getSeconds();
    console.log(`Hora actual: ${h}:${m}:${s}`);
}
// Porcentaje del dia que llevamos
function horasPasadasPorcentaje() {
    let hora = new Date();
    let h = hora.getHours();
    let m = hora.getMinutes();
    let s = hora.getSeconds();
    
    let segDia = 60*60*24;
    let segTotal = horaSeg(h) + minSeg(m) + s;
    let segPorcentage = (segTotal / segDia) * 100;
    console.log(`Llevamos un ${segPorcentage.toFixed(2)}% de horas pasadas en el dia.`)
}
function horaSeg(h) {
    return 3600*h;
}
function minSeg(m) {
    return 60*m;
}
// Porcentaje de lo que queda de dia
function horasQueQuedanPorcentaje() {
    let hora = new Date();
    let h = hora.getHours();
    let m = hora.getMinutes();
    let s = hora.getSeconds();
    
    let segDia = 60*60*24;
    let segTotal = (horaSeg(h) + minSeg(m) + s) - segDia;
    let segPorcentage = (segTotal / segDia) * 100;
    console.log(`Falta un ${Math.abs(segPorcentage.toFixed(2))}% de horas para que acabe en el dia.`)
}
