import express from "express";
import cors from "cors"
import router from './dummy.js'

const app = express()
app.use(cors({
    credentials: true,
    origin: "*",
    optionsSuccessStatus: 200
}))

app.use("/editTrigger", router)

app.listen(8080)