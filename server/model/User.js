import mongoose from "mongoose"
const {Schema} = mongoose

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
    

})

const UserModel = mongoose.model("users",userSchema )

export default UserModel