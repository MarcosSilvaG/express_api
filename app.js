// Usando objeto express
const express = require('express')
// App de express 
const app = express()
// Indicamos que usaremos un JSON
app.use(express.json())
// Puerto en que abriremos nuestra app: localhost:3000
const port = 3000

// Inicializando la App
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})

// HTTP METHODS
// GET
app.get('/v1/explorers', (req, res) => {
    console.log(`API explorers GET ALL requests ${new Date()}`)
    const explorer1 = { id: 1, name: "Marcos1"}
    const explorer2 = { id: 2, name: "Marcos2"}
    const explorer3 = { id: 3, name: "Marcos3"}
    const explorer4 = { id: 4, name: "Marcos4"}
    const explorers = [ explorer1, explorer2, explorer3, explorer4 ]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)

    const explorer = { id: 1, name: "Marcos" }
    res.status(200).json(explorer)
})

// POST
app.post('/v1/explorers', (req, res) => {
    console.log(`API explorers POST request ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

// PUT  
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API epxlorer PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: "Updated!"})
})