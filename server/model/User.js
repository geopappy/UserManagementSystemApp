const mongoose= require("mongoose")
const {Schema} = mongoose

userSchema = new Schema({
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

module.exports = UserModel