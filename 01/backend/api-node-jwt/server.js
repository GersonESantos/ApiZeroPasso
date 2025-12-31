
import express from 'express'
import publicsRouters from './routes/publics.js'

const app = express()
app.use(express.json())

app.use('/', publicsRouters)
app.listen(3000, () => console.log("Servidor Rodando 🚀"))
