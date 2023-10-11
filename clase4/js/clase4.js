function cercaDe100(){
    // Coger los numeros y mostrarlos por consola
    const n1 = prompt("Escribe un numero: ");
    const n2 = prompt("Escribe un numero: ");
    console.log("Has elegido los numeros "+n1+" y "+n2);
    
    // Hago las operaciones
    const cercanoA100 = Math.abs(100 - n1) < Math.abs(100 - n2) ? n1 : n2;
    const cercanoA0 = Math.abs(n1) < Math.abs(n2) ? n1 : n2;
    return console.log("El numero mas cercano a 100 es: "+cercanoA100 +"\nEl mas cercano a 0 es: "+ cercanoA0);
}

function data3numerosHoras(){
    // Coger los numeros y mostrarlos por consola
    const h = parseInt(prompt("Escribe un numero: "));
    const m = parseInt(prompt("Escribe un numero: "));
    const s = parseInt(prompt("Escribe un numero: "));
    console.log("Has elegido los numeros "+h+", "+m+" y "+s);
    
    // Creo el objeto Date, le añado valores y lo muestr
    var data = new Date(1970, 1, 1, h, m, s+1);
    console.log(data);

    // Añado los getter
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    // Muestro el resultado
    return console.log(`Esta es tu hora: ${hora}:${min}:${seg}`);
}

function data3numerosFecha(){
    // Coger los numeros y mostrarlos por consola
    const a = parseInt(prompt("Escribe un año superior al 1970: "));
    const m = parseInt(prompt("Escribe un mes entre 0 y 11: "));
    const d = parseInt(prompt("Escribe un dia que exista en el mes elejido: "));
    console.log("Has elegido los numeros "+a+", "+m+" y "+d);
    
    // Creo el objeto Date, le añado valores y lo muestr
    var data = new Date(a, m, d);
    console.log(data);

    // Añado los getter
    let any = data.getFullYear();
    let mes = data.getMonth();
    let dia = data.getDate();
    
    // Muestro el resultado
    if(any == a && mes == m && dia == d){
        return console.log("Es valido :D");
    }else{
        return console.log("No es valido D:");
    }

}