const db=require("../models/index")


module.exports={

    getAll:async(req,res)=>{
        try {
            const friends=await db.Friends.findAll()
            res.json(friends)
        } catch (error) {
            console.log(error);
        }
    },
    getOne:async(req,res)=>{
        try {
            const onefriend=await db.Friends.findOne({where:{id:req.params.id}})
            res.json(onefriend)
        } catch (error) {
            console.log(error);
        }
    },
    create:async(req,res)=>{
        try {
            const created= await db.Friends.create(req.body) 
            res.json(created)
        } catch (error) {
           console.log(error); 
        }
    },
    remove:async(req,res)=>{
     try {
        const deleted= await db.Friends.destroy({where:{id:req.params.id}})
        res.json(deleted)
     } catch (error) {
        console.log(error);
     }
    },
    update:async(req,res)=>{
     try {
        const updated= await db.Friends.update(req.body,{where:{id:req.params.id}})
        res.json(updated)
     } catch (error) {
        console.log(error);
     }
    },

}
