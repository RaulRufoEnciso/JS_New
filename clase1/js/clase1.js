    // barra barra
    /*function alerta(){
        alert("hola")
    }*/
    function upsi(){
        alert("Upsi me tocaste")
    }
    
    function cambioDeTexto(){
        let textoInput = document.getElementById("inputTexto").value;
        alert(textoInput);
    }
    function multiplica(){
        let multi = document.getElementById("numeroAmultiplicar").value;
        if(multi <= 10 && multi >= 0){
            for (let i = 0; i <=10 ; i++) {
                let result = multi*i;
                console.log(multi+"x"+i+"="+result);
            }
        }else{
            alert("No me hago responsable")
            console.log("Mas de 10 es abuso");
        }
    }