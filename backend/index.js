import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import apiRoutes from './src/routes/index.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Implementacion de las rutas
app.use('/api',apiRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})