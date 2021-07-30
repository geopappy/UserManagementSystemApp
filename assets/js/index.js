
// create user data
console.log($("#add_user"))
$("#add_user").submit(function(event){
    alert("user added sucessfully")
})



// update user data
$("#update_user").submit(function(event){
    let unindexed_array = $(this).serializeArray()
    console.log(unindexed_array)
    alert("User data successfully updated")
})


// delete user data
if(window.location.pathname === "/"){

    
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function (e){
        let id = $(this).attr("data-id")
        
        let request = {
            "url" :  `http://localhost:8000/api/users/${id}`,
            "method": "DELETE"
        }
        if(confirm("Do you want to delete the user?")){
            $.ajax(request).done(function(res){
                alert("Data deleted successfully")
                location.reload()
            })
        }
    })
    
}
