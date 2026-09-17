import express from 'express'
import { construcaoRouter } from './routes/materiais.route.js'
const app = express()
const port = 3000

//ler o Jason trafegado na aplicação
app.use(express.json())

app.get("/", (_req, res) => {
    res.json("Hello World")
})

app.use("/materiais", construcaoRouter)


app.listen(port, () => {
    console.log(`API rodando em: http://localhost:${port}`)
})