const {validationResult} = require ("express-validator")
const UserModel = require("../model/User")

// create and save new user
exports.createUser = async(req, res, next) =>{
    try {
        //  check for errors during validation
    const errors =  validationResult(req)
        // validate request
        if(!req.body || !errors.isEmpty()) return res.status(400).send({message: "Content can not be empty!"})

        // create new User
        const user = new UserModel(req.body)
        // save user
       const newUser= await user.save()
        res.status(200).send({newUser})
  
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occured while creating new User"})
    }
}
// // fetch Users
exports.fetchUser = async(req, res, next)=>{
    const conditions = {}
    if(req.query) Object.assign(conditions, req.query)
  
    try {
        const user = await UserModel.find(conditions)
        res.status(200).send({user})
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}
// // Update User
exports.updateUser = async(req, res, next)=>{
            //  check for errors during validation
    const errors =  validationResult(req)
    // validate request
    if(!req.body || !errors.isEmpty()) return res.status(400).send({message: "Content can not be empty!"})
    
    try{
        const userUpdate = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
       
        if(!userUpdate) return res.status(404).send({message:"User not found" })
        res.json({userUpdate})
    } catch (err){
        res.status(500).send({message: err.message})
    }

    

}
// Delete User
exports.deleteUser = async(req, res, next)=>{
    try{
       const UserDeleted= await UserModel.findByIdAndUpdate(req.params.id)
       
        if(!UserDeleted) return res.status(404).send({message:"User not found" })
        res.send({message: "user successfully deleted"})
    } catch (err){
        res.status(500).send({message: err.message})
    }

}