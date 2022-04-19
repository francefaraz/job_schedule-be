var express = require('express');
var router=express.Router();
var createError=require('http-errors')
const todos1=[{id:1,name:"do swimming",completed:false}]

//todos

router.get('/', function(req, res,next) {
res.json(todos1);

})

router.get('/:id',(req, res,next)=>{
    var foundTodo=todos1.find((todo)=>todo.id===Number(req.params.id));
    if(!foundTodo){
       return next(createError(404, 'Not Found'));
 

    }
    res.json(foundTodo)
})
router.post('/todos',(req, res, next)=>{
    
    const {body}=req;
    const newTodo={
        id:todos.length+1,
        name:body.name,
        completed:false
    };
    todos1.push(newTodo);
    res.json(newTodo)
})
module.exports=router;