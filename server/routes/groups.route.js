const groupsRoute=require("express").Router()
const {getAll,getOne,create,remove,update}=require("../controllers/groups.controller")

groupsRoute.get("/getAll",getAll)
groupsRoute.get("/:id",getOne)
groupsRoute.post("/add",create)
groupsRoute.delete("/:id",remove)
groupsRoute.put("/:id",update)

module.exports=groupsRoute