const express = require("express")
const app = express()
const path = require("path")
 const morgan = require("morgan")
require("dotenv").config({path: "config.env"})
const {UM_DB_URL, UM_PORT} = process.env

// log requests
// app.use(morgan("tiny"))

// parse request to bodyparser
app.use(express.urlencoded({extended: false}))

// set view engine
app.set("views", path.resolve(__dirname,"views"))
app.set("view engine","ejs")

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/img", express.static(path.resolve(__dirname, "assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))


// load routers
app.use('/', require("./server/routes/router"))




app.listen(UM_PORT, () => {console.log(`Server running fast on PORT ${UM_PORT}`)})
