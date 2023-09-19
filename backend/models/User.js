const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user_id:{
        type:Number,
        require:true,
        unique:true,
    },
    user_name:{
        type:String,
        require:true,
    },
    email_id:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})
module.exports=mongoose.model("User",userSchema);