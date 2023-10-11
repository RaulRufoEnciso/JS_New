function calculaPotenciaPow(){
    // Coger los numeros y mostrarlos por consola
    const numero = prompt("Escribe un numero: ");
    const elevado = prompt("Escribe un numero: ");
    console.log("tu numero es "+numero+" y lo elevas a "+elevado);
    
    // Utilizando Math.pow elevamos el nuemro elegido con el nuemro a elevar
    let resultado = Math.pow(numero,elevado);
    return resultado;
}

    console.time("calculaPotenciaPow"); // Inicia el temporizador
    // const resultPow = calculaPotenciaPow();
    // console.log(resultPow); 
    console.timeEnd("calculaPotenciaPow") // Finaliza el temporizador

function calculaPotenciaFor(){    
    // Coger los numeros y mostrarlos por consola
    const numero = prompt("Escribe un numero: ");
    const elevado = prompt("Escribe un numero: ");
    console.log("tu numero es "+numero+" y lo elevas a "+elevado);
    let resul = 1;

    // Iteramos el numero elejido tantas veces como se quiera elevar
    for (let i = 0; i < elevado; i++) {
        resul *= numero
    }
    return resul;
}
    console.time("calculaPotenciaFor"); // Inicia el temporizador
    // const resultFor = calculaPotenciaFor();
    // console.log(resultFor); 
    console.timeEnd("calculaPotenciaFor") // Finaliza el temporizador

function mitjanaA3(){
    // Solicitamos los 3 numeros y los mostramos
    const numero1 = parseInt(prompt("Escribe el primer numero: "))
    const numero2 = parseInt(prompt("Escribe el segundo numero: "))
    const numero3 = parseInt(prompt("Escribe el tercero numero: "))
    console.log(`Elegiste los siguientes numeros: ${numero1} ${numero2} ${numero3}`);

    return (numero1+numero2+numero3)/3
} 

function maxA3(){
    // Solicitamos los 3 numeros y los mostramos
    const numero1 = parseInt(prompt("Escribe el primer numero: "))
    const numero2 = parseInt(prompt("Escribe el segundo numero: "))
    const numero3 = parseInt(prompt("Escribe el tercero numero: "))
    console.log(`Elegiste los siguientes numeros: ${numero1} ${numero2} ${numero3}`);

    return Math.max(numero1, numero2, numero3);
} 

function minA3(){
    // Solicitamos los 3 numeros y los mostramos
    const numero1 = parseInt(prompt("Escribe el primer numero: "))
    const numero2 = parseInt(prompt("Escribe el segundo numero: "))
    const numero3 = parseInt(prompt("Escribe el tercero numero: "))
    console.log(`Elegiste los siguientes numeros: ${numero1} ${numero2} ${numero3}`);

    return Math.min(numero1, numero2, numero3);
} 

console.log(mitjanaA3());
console.log(maxA3());
console.log(minA3());