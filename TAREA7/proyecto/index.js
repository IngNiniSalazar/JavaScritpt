import express from 'express';

const app= express()
const port= 3002
//middleware
app.use(express.json())

let students =  [
    { "id": 1, "name": "Alice", "age": 20, "major": "Computer Science" },
    { "id": 2, "name": "Bob", "age": 22, "major": "Mathematics" },
    { "id": 3, "name": "Charlie", "age": 21, "major": "Physics" }
]
app.get('/students', (req, res) =>{
    res.send(students) 
})
// post y put nos permiten recibir datos por un body
app.post('/students', (req, res) =>{
    console.log(req.body)
    students.push(req.body)
    res.send(`se ha agregado el estudiante ${req.body.title}`) 
})


app.listen(port, ()=> {
    console.log(`Crear un servidor HTTP utilizando la librería express de Node.js en el puerto ${port}`)
})

