const friendsRoute=require("express").Router()
const {getAll,getOne,create,remove,update}=require("../controllers/friends.controller")

friendsRoute.get("/getAll",getAll)
friendsRoute.get("/:id",getOne)
friendsRoute.post("/add",create)
friendsRoute.delete("/:id",remove)
friendsRoute.put("/:id",update)

module.exports=friendsRoute