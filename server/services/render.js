import  axios from "axios"

/* 
    @desc Home Route
    @method Get /
    @access    Public
*/
export const homeRoute = async (req, res) =>{
    try{
        const {data}= await axios.get("http://localhost:8000/api/users")
        
        
        res.render("index", {users: data.user})
    }catch(err){
        res.send(err.message)
    }
    
}
/* 
    @desc Add-User form Route
    @method Get /add-user
    @access    Public
*/
export const addUserRoute = (req, res) =>{
    res.render("addUser")
}

/* 
    @desc Update-User form Route
    @method Get /update-user
    @access    Public
*/
export const updateUserRoute = async (req, res) =>{
    const {id} = (req.params)
    
    try {
        const {data} = await axios.get("http://localhost:8000/api/users", {params: {id: id}} )
        
        res.render("updateUser", {user: data.user[0]})
    } catch (err) {
        res.status(500).send(err.message)
    }
    
}
