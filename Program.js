const readlineSync = require('readline-sync');

let CantidaDePaquetes = +readlineSync.question('¿Cuantos paquetes son?: ');
console.log(CantidaDePaquetes);
