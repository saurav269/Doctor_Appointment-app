const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

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

//dot config
dotenv.config()
//mongodb connection
connectDB()

//ALL ROUTES
app.use('/api/v1/auth', require('./Routes/auth'))
app.use('/api/v1/users', require('./Routes/user'))
app.use('/api/v1/doctors', require('./Routes/doctor'))
app.use('/api/v1/reviews', require('./Routes/review'))


app.listen(port, () => {
    console.log("Server is running on port" + port)
})
