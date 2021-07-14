const mongoose = require("mongoose")
 require("dotenv").config({path : "config.env"})
 const {UM_DB_URL,}  = process.env

const connectDB = async() => {
    try {
      const con=  await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })
        console.log("Database connected " + con.connection.host )
        
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB