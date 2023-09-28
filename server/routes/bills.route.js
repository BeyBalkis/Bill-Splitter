const billsRoute=require("express").Router()
const {getAll,getOne,create,remove,update}=require("../controllers/bills.controller")


billsRoute.get("/getAll",getAll)
billsRoute.get("/:id",getOne)
billsRoute.post("/add",create)
billsRoute.delete("/:id",remove)
billsRoute.put("/:id",update)

module.exports=billsRoute