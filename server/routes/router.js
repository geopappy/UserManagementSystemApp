const route = require('express').Router()
const {check} = require("express-validator")
const renderRoutes = require("../services/render")
const controller = require("../controller/userController")

// route for frontend render
route.get("/", renderRoutes.homeRoute)

route.get("/add-user", renderRoutes.addUserRoute)

route.get("/update-user", renderRoutes.updateUserRoute)

// BackEnd API route

route.post("/api/users", [check("gender", "choose your gender from the options given").exists(), check("status", "choose your status from the options given").exists()],controller.createUser)

route.get("/api/users", controller.fetchUser)

route.put("/api/users/:id",[check("gender", "choose your gender from the options given").exists(), check("status", "choose your status from the options given").exists()] ,controller.updateUser)

route.delete("/api/users/:id", controller.deleteUser)








module.exports = route