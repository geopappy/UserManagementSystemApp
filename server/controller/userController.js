import {validationResult} from "express-validator"
import UserModel from "../model/User.js"

// create and save new user
export const createUser = async(req, res, next) =>{
    try {
        //  check for errors during validation
    const errors =  validationResult(req)
        // validate request
        if(!req.body || !errors.isEmpty()) return res.status(400).send({message: "Content can not be empty!"})

        // create new User
        const user = new UserModel(req.body)
        // save user
       const newUser= await user.save()
        // res.status(200).json({newUser})
        // redirect user back to add-user form
        res.redirect("/add-user")
  
    } catch (err) {
        res.status(500).json({message: err.message || "Some error occured while creating new User"})
    }
}
// // fetch Users
export const fetchUser = async(req, res, next)=>{
    const conditions = {}
    if(req.query.id) conditions._id = req.query.id
    
  
    try {
        const user = await UserModel.find(conditions)
        
        res.json({user})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
// // Update User
export const updateUser = async(req, res, next)=>{

    console.log("i got here")
            //  check for errors during validation
    const errors =  validationResult(req)
    // validate request
    if(!req.body || !errors.isEmpty()) return res.status(400).json({message: "Content can not be empty!"})
    
    try{
        const userUpdate = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
       
        if(!userUpdate) return res.status(404).json({message:"User not found" })
        // res.json({userUpdate})
        res.redirect("/")
    } catch (err){
        res.status(500).json({message: err.message})
    }

    

}
// Delete User
export const deleteUser = async(req, res, next)=>{
    try{
        
       const UserDeleted= await UserModel.findByIdAndDelete(req.params.id)
       
        if(!UserDeleted) return res.status(404).json({message:"User not found" })
        res.send("User deleted successfully")
       
    } catch (err){
        res.status(500).json({message: err.message})
    }

}