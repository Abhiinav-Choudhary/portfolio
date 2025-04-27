const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema([
    {
   Name : {
    type : String,
    unique : true ,
    required : true
   },
   email :{
    type : String,
    unique : true ,
    required : true
   },

   message :{
    type : String,
    required : true
   }
    }
],{timestamps:true})


const Req = mongoose.model("req",requestSchema)

module.exports = Req