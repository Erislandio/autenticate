const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({
        hello: 'Olá'
    })
})

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}...`))