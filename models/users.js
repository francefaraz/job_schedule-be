const mongoose=require('mongoose');
console.log("commed")
const Schema=mongoose.Schema;

const usersSchema=Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

},{timestamps:true})
module.exports=mongoose.model('Users',usersSchema,"users");