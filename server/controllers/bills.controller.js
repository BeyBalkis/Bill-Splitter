const db=require("../models/index")


module.exports={

    getAll:async(req,res)=>{
        try {
            const bills=await db.Bills.findAll()
            res.json(bills)
        } catch (error) {
            console.log(error);
        }
    },
    getOne:async(req,res)=>{
        try {
            const onebill=await db.Bills.findOne({where:{id:req.params.id}})
            res.json(onebill)
        } catch (error) {
            console.log(error);
        }
    },
    create:async(req,res)=>{
        try {
            const created= await db.Bills.create(req.body) 
            res.json(created)
        } catch (error) {
           console.log(error); 
        }
    },
    remove:async(req,res)=>{
     try {
        const deleted= await db.Bills.destroy({where:{id:req.params.id}})
        res.json(deleted)
     } catch (error) {
        console.log(error);
     }
    },
    update:async(req,res)=>{
     try {
        const updated= await db.Bills.update(req.body,{where:{id:req.params.id}})
        res.json(updated)
     } catch (error) {
        console.log(error);
     }
    },

}
