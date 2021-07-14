const route = require('express').Router()
const renderRoutes = require("../services/render")

// route for frontend render
route.get("/", renderRoutes.homeRoute)

route.get("/add-user", renderRoutes.addUserRoute)

route.get("/update-user", renderRoutes.updateUserRoute)







module.exports = route