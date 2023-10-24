function tablaPiramide() {
    let nCol = parseInt(prompt("Inserta el numero de celdas para la base: "));

    const tabla = document.createElement("table");
    let nFilas = nCol/2+1;
    let rojos = 1;
   

    for (let i = 1; i <= nFilas; i++) {
        const fila = document.createElement("tr");
        let blancos = (nCol- rojos)/2 ; 

        iteraciondelfor(blancos,'white',fila)
        iteraciondelfor(rojos,'red',fila)
        iteraciondelfor(blancos,'white',fila)
    
    tabla.appendChild(fila);
    rojos+=2;
    }

    document.body.appendChild(tabla);
}
function addceldatotr(tr,color){

    let td = document.createElement("td");
    console.log(color);
    td.style.backgroundColor = color;
    td.style.height='20px';
    td.style.width='20px';
    tr.appendChild(td);

}
function iteraciondelfor(ncolor,color,nfila){

    for(let b1= 0; b1 < ncolor; b1++){
        addceldatotr(nfila,color);
            }

}

function tablaRombo() {
    let nCol = parseInt(prompt("Inserta el numero de celdas para la base: "));

    const tabla = document.createElement("table");
    let nFilas = nCol/2+1;
    let rojos = 1;
   

    for (let i = 1; i < nFilas; i++) {
        let fila = document.createElement("tr");
        let blancos = (nCol- rojos)/2 ; 

        iteraciondelfor(blancos,'white',fila);
        iteraciondelfor(rojos,'red',fila);
        iteraciondelfor(blancos,'white',fila);
        tabla.appendChild(fila);
        rojos+=2;
    }
    for (let i = 1; i < nFilas; i++) {
        rojos-=2;
        let fila = document.createElement("tr");
        let blancos = (nCol- rojos)/2 ; 
        iteraciondelfor(blancos,'white',fila);
        iteraciondelfor(rojos,'red',fila);
        iteraciondelfor(blancos,'white',fila);
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}

function extensionArchivo(){
    let nombreArchivo = prompt("escribe el nombre del archivo junto su extension:")
    const extension = nombreArchivo.split(".").pop();

    console.log(`.${extension}`); 
}