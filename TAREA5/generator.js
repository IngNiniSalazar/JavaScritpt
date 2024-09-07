import {error} from "console"
import { readFile, appendFile, writeFile, unlink } from "fs";



//appendFile('numero.txt', "números del 1 al 1000, separados por coma 1,2,3,4,5", (error) => {
 //   if(error) console.log(error)
 //   else console.log("file updated")
//})



   //readFile('numero.txt',  (error, data) => {
//if(error) console.error(error)
   //else console.log('file deleted')
//})

//unlink('numero.txt',  (error) => {
  //  if(error) console.error(error)
  // else console.log(data.toString)
//})


const numeros = Array.from({ length: 1000 }, (_, i ) => i + 1).join(', ');

writeFile('numero.txt', numeros, (error) => {
      if(error) console.error(error)
      else console.log("Archivo numero.txt creado desde el 1 al 1000 separado por coma")
   });