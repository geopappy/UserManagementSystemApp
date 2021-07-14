

/* 
    @desc Home Route
    @method Get /
    @access    Public
*/
exports.homeRoute = (req, res) =>{
    res.render("index")
}
/* 
    @desc Add User Route
    @method Get /add-user
    @access    Public
*/
exports.addUserRoute = (req, res) =>{
    res.render("addUser")
}

/* 
    @desc Update User Route
    @method Get /update-user
    @access    Public
*/
exports.updateUserRoute = (req, res) =>{
    res.render("updateUser")
}
