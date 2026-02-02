import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

app.get('/', (request, response) => {
    response.json('Connected')
})

app.get('/confessions', async (request, response) => {
    const data = await db.query(`SELECT * FROM confessions`)
    const confessions = data.rows
    response.status(200).json(confessions)
})

app.post('/confessions', async (request, response) => {
    const input = request.body

await db.query(`INSERT INTO confessions (display_name, messages) VALUES ($1, $2)`, [input.displayName, input.messages])

response.status(200).json({alert: "confession added!"})
})

app.listen(3000, () => {
    console.log(`Serving running on http://localhost:3000`)
})