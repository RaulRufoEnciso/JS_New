function cambio() {
    let priceProduct = parseFloat(prompt("Insertge el precio del producto:"));
    let dinero = parseFloat(prompt("Inserte cuanto dinero entrega:"));
    let cambi = dinero - priceProduct;
    let cambiTotal = dinero - priceProduct;
    console.log("Vienvenido al cagero !!");

    const denominaciones = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const cantidadDenominaciones = {};

    for (const denominacion of denominaciones) {
        if (cambi >= denominacion) {
        const cantidad = Math.floor(cambi / denominacion);
        cantidadDenominaciones[denominacion] = cantidad;
        cambi -= cantidad * denominacion;
        }
    }

    console.log("Precio = "+priceProduct+"\tPagado = "+dinero);
    for (const key in cantidadDenominaciones ) {
        console.log(`${cantidadDenominaciones[key]} de ${key}`);
    }
    console.log("Total del cambio = "+cambiTotal);
}
function crearTabla() {
    let nFilas = parseInt(prompt("Inserta el numero de filas: "));
    let nCol = parseInt(prompt("Inserta el numero de columnas: "));

    const tabla = document.createElement("table");

    for (let i = 1; i <= nFilas; i++) {
        const fila = document.createElement("tr");
        for (let j = 1; j <= nCol; j++) {
          const celda = document.createElement("td");
          celda.textContent = `${i}, ${j}`;
          fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}

    
