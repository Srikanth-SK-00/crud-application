const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoschema");




router.post("/post",async(req,res) =>
{
    
    var data = new InfoRouter({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    });

   await data.save();
   res.json(data);
})


router.get("/",async(req,res) =>
{
    var findData = await InfoRouter.find();
    res.json(findData);
})


router.get("/name/:name",async(req,res) =>
{
    
    var find = await InfoRouter.find({Name:req.params.name});
    res.json(find)
})
router.get("/city/:name",async(req,res) =>
{
    
    var find = await InfoRouter.find({City:req.params.name});
    res.json(find)
})
router.get("/age/:name",async(req,res) =>
{
    
    var find = await InfoRouter.find({Age:req.params.name});
    res.json(find)
})
router.put("/update",async(req,res) =>
{
    var update = await InfoRouter.update({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});
    res.json(update);
})


router.put("/update/:name",async(req,res) =>
{
    var update = await InfoRouter.updateMany({Age:req.params.name},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});
    res.json(update);
})

router.delete("/delete/:name",async(req,res) =>
{ 
    var delData =   await InfoRouter.deleteMany({Name:req.params.name})
        res.json({message:"data deleted"}) 
})



module.exports=router; 