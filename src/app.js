import express from "express"
import cors from "cors"

const app = express()

//middleware configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN
}))


app.use(express.json())
app.use(express.urlencoded())


//routes import
import salesRepresentativeRoutes from "./routes/salesRepresentative.router.js"
import customerRoutes from "./routes/customer.router.js"



//routes declaration
app.use("/api/v1/sales-representative", salesRepresentativeRoutes);
app.use("/api/v1/customer", customerRoutes);


export default app