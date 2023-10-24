function tablaPiramide() {
    let nFilas = parseInt(prompt("Inserta el numero de celdas para la base: "));

    const tabla = document.createElement("table");

    for (let i = 1; i <= nFilas; i++) {
        const fila = document.createElement("tr");
        for (let j = 1; j <= i; j++) {
            const celda = document.createElement("td");
            fila.appendChild(celda);
            // Calcular el rango de columnas para la última fila
            const inicioUltimaFila = nFilas + i - 1;
            const finUltimaFila = nFilas - i + 1;

            // Colorear las celdas de la última fila
            if (j <= inicioUltimaFila && j >= finUltimaFila) {
                celda.style.backgroundColor = "red";

            
            }
            tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
    }
}
