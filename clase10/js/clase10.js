function tablaMultiplicar() {
    let nFilas = parseInt(prompt("Inserta el numero de filas: "));
    let nCol = parseInt(prompt("Inserta el numero de columnas: "));

    const tabla = document.createElement("table");

    for (let i = 1; i <= nFilas; i++) {
        const fila = document.createElement("tr");
        for (let j = 1; j <= nCol; j++) {
          const celda = document.createElement("td");
          celda.textContent = i*j;
          fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}

function tablaPiramide() {
    let nFilas = parseInt(prompt("Inserta el numero de filas: "));

    const tabla = document.createElement("table");

    for (let i = 1; i <= nFilas; i++) {
        const fila = document.createElement("tr");
        for (let j = 1; j < i; j++) {
            const celda = document.createElement("td");
            fila.appendChild(celda);
            // Calcular el rango de columnas para la última fila
            const inicioUltimaFila = nFilas - i + 1;
            const finUltimaFila = nFilas + i - 1;

            // Colorear las celdas de la última fila
            if (j >= inicioUltimaFila && j <= finUltimaFila) {
                celda.style.backgroundColor = "red";

            
            }
            tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
    }
}
