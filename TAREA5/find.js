import {error} from "console"
import { readFile, appendFile, writeFile, unlink } from "fs";

const findPares = () => {
    // Leer el archivo numeros.txt
    readFile('numero.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return;
      }


const numeros = data
      .split(/,|\n/) // Dividir los números por comas o saltos de línea
      .map(Number)   // Convertir cada fragmento a un número
      .filter(num => !isNaN(num)); // Filtrar los valores que no son números

const par = Array.from(numeros.filter(num => num % 2 === 0));


console.log('Números pares en numeros.txt:', par.join(', '));

const parContent = par.join(',');
writeFile('pares.txt', parContent, (error) => {
    if(error) console.error(error)
    else console.log("Archivo par.txt creado ")
});


});
};



findPares();




//writeFile('numero.txt', numeros, (error) => {
//    if(error) console.error(error)
 //   else console.log("Archivo numero.txt creado desde el 1 al 1000 separado por coma")
 //});