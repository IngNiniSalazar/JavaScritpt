import http from 'http';
import 'dotenv/config';
import { write } from 'fs';

console.log("1.Creando una pequeña API que gestione una lista de productos. Tu API debe correr por el puerto 3002")

const port = process.env.PORT  //la url es localhost:3002
//creando el servidor
//req=request -> peticion
//res=response -> respuesta
const products = JSON.stringify([
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
])

http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    switch (req.url) {
        case '/products':
            res.write(products)
            break
        default:
            //res.writeHead(404, {'Content-type': 'text/plain'})
            res.write('Error 404, no se encontro la pagina')
        
    }
    res.end()
}).listen(port)