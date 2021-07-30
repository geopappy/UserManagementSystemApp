import express from 'express'
const route = express.Router()
import {check} from "express-validator"
import {homeRoute,addUserRoute,updateUserRoute} from "../services/render.js"
import {createUser,fetchUser,updateUser,deleteUser}  from "../controller/userController.js"

// route for frontend render
route.get("/", homeRoute)

route.get("/add-user", addUserRoute)

route.get("/update-user/:id",updateUserRoute)

// BackEnd API route

route.post("/api/users", [check("gender", "choose your gender from the options given").exists(), check("status", "choose your status from the options given").exists()],createUser)

route.get("/api/users", fetchUser)

route.put("/api/users/:id",[check("gender", "choose your gender from the options given").exists(), check("status", "choose your status from the options given").exists()] ,updateUser)

route.delete("/api/users/:id", deleteUser)








export default route