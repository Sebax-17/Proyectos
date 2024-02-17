const readline = require(`readline`);

const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
    terminal: false
});

let costoTotalFlete = 0;
let cantidadProductosEnFlete = 0;
let dimencionesDelMyorDimenciones = 0;
let descripcionMayorDimenciones = ``;
let totalImpuesto = 0;

rli.on(`line`, (linea)=>{
    const valoresLinea = linea.split(`,`);
    const descripcion = valoresLinea[0];
    const ancho = valoresLinea[1];
    const alto = valoresLinea[2];
    const pronfundida = valoresLinea[3];
    const dimenciones = alto * ancho * profundidad;
    console.info({dimenciones});
    let costoTransportProducto = dimenciones * 100;
    console.info({costoTransportProducto});
    let impuesto = 0;
    if(dimenciones > 1000){
        impuesto = costoTransportProducto * 0.1;
    }
    else if(dimenciones > 10000){
        impuesto = costoTransportProducto * 0.2;
    }
    
    console.info({impuesto});

    costoTransportProducto = costoTransportProducto + impuesto;
    console.info(`costo transporte / iva incluido: ${costoTransportProducto}`);

    costoTotalFlete += costoTransportProducto;

    if(dimenciones > dimencionesDelMyorDimenciones){
        dimencionesDelMyorDimenciones = dimenciones;
        descripcionMayorDimenciones = descripcion;
    }
    cantidadProductosEnFlete++;
    totalImpuesto += impuesto;

    console.info(`1. el costo del flete es: ${costoTotalFlete}`);
    console.info(`2. El producto con mayores dimenciones es: ${descripcion}`);
    const promedio = costoTotalFlete/ cantidadProductosEnFlete;
    console.info(`Promedio del costo de productos en el flete incluyendo impuestos: ${promedio} `);
    console.info(`4. Total impuestos: ${totalImpuesto}`);
});