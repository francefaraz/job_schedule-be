var express = require('express');
var router=express.Router();
// var createError=require('http-errors')
const Workers=require('../models/workers')
//get all data 

router.post('/add',async function(req, res) {
     console.log("added")
     console.log(req.body);
    try{
       const data=await new Workers(req.body).save()
       res.status(201).send(data)
    }
    catch(error){
      res.send(error)
    }

})

router.post('/search',async(req,res)=>{

  const days=req.body.days || ["mon","tue","wed"]
  const start_time=req.body.start_time;
  const end_time=req.body.end_time;
  console.log(start_time)
  console.log(end_time)
  var result=[]
  console.log(days)
    console.log("data comed")
    const data=await Workers.find({ days_avail: { $all:days},start_times:{$all:start_time},end_time:{$all:end_time}});
    try{
      // const data=await Workers.find();
      console.log("data is ",data)
      await data.map((d)=>{
        console.log('position',d.days_avail.indexOf(days))

         pos=d.days_avail.indexOf(days)

        if(d.start_times[pos]<=start_time && d.end_times[pos]>=end_time){
          result.push(d)
         }
         console.log(d.start_times)
      })
      console.log("result is ",result)
      if( result.length == 0){
        res.send({"only_available":data})
      }
      else
      res.send(await result);
    }
    catch(error){
      console.log("edar")
      res.send(error)
    }
})

router.get('/',async(req,res)=>{

  
    console.log("data comed")
    const data=await Workers.find();
      console.log("data is ",data)
    try{
      // const data=await Workers.find();
      console.log("data is ",data)
      res.send(data);
    }
    catch(error){
      res.send(error)
    }
})

// router.put('/:id',async(req, res)=>{

//     try {
//         console.log("entered")
//         console.log(req.params.id)
//         console.log(req.body)
//         const data=await Workers.findOneAndUpdate(
//            {_id:req.params.id},
//            req.body
//         )
//         console.log("data is  ",data)
//         res.send(data)
//     } catch (error) {
//         res.send(error)
//     }
// })
router.delete('/:id',async(req, res)=>{
try {
    const data=await Workers.findByIdAndDelete(req.params.id)
    console.log("data is  ",data)

    res.send(data)
} catch (error) {
    res.send(error)
}

})
module.exports=router;