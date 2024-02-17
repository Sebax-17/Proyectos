const readlineSync = require('readline-sync');

const cantidadProductos = +readlineSync.question('Ingrese la cantidad de productos: ');

let TotalFlete = 0;
let DimencionMayor = 0;
let Imp = 0;
let ImpTotalFlete = 0;

for (let i = 0; i < cantidadProductos; i++) {
    const numeroEmpaque = readlineSync.question(`Ingrese el número del empaque ${i + 1}: `);
   //error mejor utilizar while do 
    if (numeroEmpaque < 1 || numeroEmpaque > 3) {
        console.error("El número de empaque no es válido");
        continue;
    }

    const ancho = +readlineSync.question(`Ingrese el ancho del producto ${i + 1}: `);
    if (ancho < 0) {
        console.error("El ancho del producto no es válido");
        continue; 
    }

    const alto = +readlineSync.question(`Ingrese el alto del producto ${i + 1}: `);
    if (alto < 0) {
        console.error("El alto del producto no es válido");
        continue;
    }

    const profundidad = +readlineSync.question(`Ingrese la profundidad del producto ${i + 1}: `);
    if (profundidad < 0) {
        console.error("La profundidad del producto no es válida");
        continue;
    }

    const volumen = (ancho * alto * profundidad)*100;

   
    
    if (volumen > 1000 && volumen < 10000) {
        Imp = volumen * 0.1;
    } 
       else if (volumen > 10000) {
         Imp = volumen * 0.2;
    }

   
    const costoTotalProducto = (volumen + Imp) ;

    TotalFlete += costoTotalProducto;

    
    if (volumen > DimencionMayor) {
        DimencionMayor = volumen; 
    }

    ImpTotalFlete += Imp;
}




 const promediodelflete = TotalFlete/cantidadProductos;

console.info("El costo total del flete es: ",{TotalFlete});
console.info("Producto de mayores dimensiones: ",{DimencionMayor});
console.info("Promedio total del flete es: ",{promediodelflete});
console.info("El impuesto total por el flete es: ",{ImpTotalFlete});