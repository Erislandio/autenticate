const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./controller/AuthController')(app)

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}...`))