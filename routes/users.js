var express = require('express');
var router=express.Router();
// var createError=require('http-errors')
const Users=require('../models/users')
//get all data 

router.post('/add',async function(req, res) {
     console.log("added")
     console.log(req.body);
    try{
       const data=await new Users(req.body).save()
       res.status(201).send(data)
    }
    catch(error){
      res.send(error)
    }

})

router.get('/',async(req,res)=>{

    console.log("data comed")
    const data=await Users.find();
      console.log("data is ",data)
    try{
      const data=await Users.find();
      console.log("data is ",data)
      res.send(data);
    }
    catch(error){
      res.send(error)
    }
})

router.put('/:id',async(req, res)=>{

    try {
        console.log("entered")
        console.log(req.params.id)
        console.log(req.body)
        const data=await Users.findOneAndUpdate(
           {_id:req.params.id},
           req.body
        )
        console.log("data is  ",data)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/:id',async(req, res)=>{
try {
    const data=await Users.findByIdAndDelete(req.params.id)
    console.log("data is  ",data)

    res.send(data)
} catch (error) {
    res.send(error)
}

})
module.exports=router;