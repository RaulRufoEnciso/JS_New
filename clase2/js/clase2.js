function multiplica(){
    let multi2 = prompt("Escribe un numero del 0 al 10: ");

    console.log("Tu numero es "+multi2);
    
    if(multi2 <= 10 && multi2 >= 0){
        for (let i = 0; i <=10 ; i++) {
            let result = multi2*i;
            console.log(`${multi2} x ${i} = ${result}`);
        }  
    }else{
        alert("No me hago responsable")
        console.log("Mas de 10 es abuso");
    }
}



function fibonacci() {
    const n = prompt("Escribe un numero: ");

    const sequence = [1, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFib = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextFib);
    }
    
    return console.log(`Los primeros ${n} números de Fibonacci son: ${sequence.join(', ')}`);
  }
  
  
