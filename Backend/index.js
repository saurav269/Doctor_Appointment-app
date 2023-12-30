const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

//SETUP DOTENV
dotenv.config()

const app = express()

const port = process.env.PORT || 8000

const corsOptions = {
    origin : true
}

app.get("/", (req,res) => {
    res.send("API is working")
})

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log("Server is running on port" + port)
})
