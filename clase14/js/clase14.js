function mediaNoche(){
//restarle a las horas 24 y a los minutos 60 y ese es el tiempo restante

let horaActual = prompt("establece la hora: ")

let horaActualANumero = horaActual.split(":");
parseInt(horaActualANumero[0]);
parseInt(horaActualANumero[1]);

if (horaActual != "00:00" && horaActual != "0:00") {
    let horasRestantes = Math.abs(horaActualANumero[0] - 24);
    let minRestantes = Math.abs(horaActualANumero[1] - 60);
    alert(`Falta ${horasRestantes}:${minRestantes} para la media noche :D`);
}else{
    alert("Ya es media noche :D");
}
}


function adivianElNumero() {
// Generamos un numero a adivinar entre el 1 y 100
let numeroAdivinar = Math.floor(Math.random() * 100) + 1;
console.log("El numero es "+numeroAdivinar);
let nuemroAdivinado;
let intentos = 0;
while (numeroAdivinar != nuemroAdivinado) {
    nuemroAdivinado = parseInt(prompt("Inserta un numero entre el 1 y el 100 para intentar adivinarlo: "));
    intentos += 1;
    console.log(`Intento nuemro ${intentos}`);
    if (nuemroAdivinado == 0) {
        alert("Game over");
        return;
    }else{
        if (numeroAdivinar < nuemroAdivinado) {
            alert("El numero elejido es menor");
        }else{
            if (numeroAdivinar > nuemroAdivinado) {
                alert("El numero elejido es mayor");
            }else{
                alert(`El numero ${nuemroAdivinado} es correcto. Numero de intentos es ${intentos}`);
            }
        }
    }
}
}