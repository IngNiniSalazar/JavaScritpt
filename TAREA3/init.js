import esperarSegundos from './async.js';

(async () => {

    console.log("Esperando 1 segundos...");
    await esperarSegundos(1); // Espera 5 segundos
    console.log("Se ha esperado 1 segundos.");

    console.log("Esperando 4 segundos...");
    await esperarSegundos(4); // Espera 5 segundos
    console.log("Se ha esperado 4 segundos.");

    console.log("Esperando 5 segundos...");
    await esperarSegundos(5); // Espera 5 segundos
    console.log("Se ha esperado 5 segundos.");

    console.log("Esperando 6 segundos...");
    await esperarSegundos(6); // Espera 5 segundos
    console.log("Se ha esperado 6 segundos.");
})();