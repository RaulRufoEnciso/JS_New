function tablaPiramide() {
    let nCol = parseInt(prompt("Inserta el numero de celdas para la base: "));

    const tabla = document.createElement("table");
    let nFilas = nCol/2+1;
    let rojos = 1;
   

    for (let i = 1; i <= nFilas; i++) {
        const fila = document.createElement("tr");
        let blacos = (nCol- rojos)/2 ; 

    for(let b1= 0; b1 < blacos; b1++){
        addceldatotr(fila,'white');
            }
    
    for (let r= 0; r < rojos; r++) {
        addceldatotr(fila,'red');
            }

    for (let j = 0; j < blacos; j++) {
        addceldatotr(fila,'white');
    }
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
funcion