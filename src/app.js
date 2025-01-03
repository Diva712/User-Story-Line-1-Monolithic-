import express from "express"
import cors from "cors"

const app = express()

//middleware configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN
}))


app.use(express.json())
app.use(express.urlencoded())

export default app