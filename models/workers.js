const mongoose=require('mongoose');
console.log("commed")
const Schema=mongoose.Schema;

const workersSchema=Schema({
    name:{
        type:String,
        required:true
    },
    days_avail:{
        type:Array,
        required:true
    },
    start_times:{
        type:Array,
        required:true
    },
    end_times:{
        type:Array,
        required:true
    }

},{timestamps:true})
module.exports=mongoose.model('Workers',workersSchema,"workers");