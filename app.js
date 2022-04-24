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