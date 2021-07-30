import mongoose from "mongoose"
 import dotenv from "dotenv"
 dotenv.config({path : "config.env"})
 const {UM_DB_URL}  = process.env

const connectDB = async() => {
    try {
      const con=  await mongoose.connect(process.env.UM_DB_URL,{
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

export default connectDB