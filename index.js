const express = require('express')
const bodyParser = require('body-parser')
const { json } = require('body-parser')

const app = express()

app.use(bodyParser.json())

const jogosFavoritos = []

app.post('/jogos', (req, res) => {
  try {
    if (!req.body.nome || !req.body.plataforma) {
      throw new Error('Não apresentados dados validos')
    }
    jogosFavoritos.push(req.body)
    res.send(JSON.stringify(jogosFavoritos))
  } catch (erro) {
    res.send(JSON.stringify(erro))
  }
})

app.listen(3002, () => console.log('A api está rodando'))
