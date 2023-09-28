const db=require("../models/index")


module.exports={

    getAll:async(req,res)=>{
        try {
            const groups=await db.Groups.findAll()
            res.json(groups)
        } catch (error) {
            console.log(error);
        }
    },
    getOne:async(req,res)=>{
        try {
            const onegroup=await db.Groups.findOne({where:{id:req.params.id}})
            res.json(onegroup)
        } catch (error) {
            console.log(error);
        }
    },
    create:async(req,res)=>{
        try {
            const created= await db.Groups.create(req.body) 
            res.json(created)
        } catch (error) {
           console.log(error); 
        }
    },
    remove:async(req,res)=>{
     try {
        const deleted= await db.Groups.destroy({where:{id:req.params.id}})
        res.json(deleted)
     } catch (error) {
        console.log(error);
     }
    },
    update:async(req,res)=>{
     try {
        const updated= await db.Groups.update(req.body,{where:{id:req.params.id}})
        res.json(updated)
     } catch (error) {
        console.log(error);
     }
    },

}
