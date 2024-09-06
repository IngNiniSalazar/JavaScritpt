import { createReadStream } from 'fs';

const num1 = parseInt(process.argv[2])
const operacion = process.argv[3]
const num2 = parseInt(process.argv[4])
let total = 0


const calcula = (num1, operacion, num2) => {
    if (operacion == '+') {
        total = num1 + num2;
        return `la suma de los dos numeros es: ` + total;
    }

    else if (operacion == '-') {
        total = num1 - num2;
        return `la resta de los dos numeros es: ` + total;
    }
    else if (operacion == '*'){
        total = num1*num2;
        return `la multiplicacion de los dos numeros es: ` + total;
    }
       
    else if (operacion == '/')
        if (num2 != 0){
            total = num1/num2;
            return (`resultado de la division es ` +  total);
        }
            
        else
            return "Error: División por cero";
    else
        return "Error: Operación no válida"
}

console.log(calcula(num1, operacion, num2));