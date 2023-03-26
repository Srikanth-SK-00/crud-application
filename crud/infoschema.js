const mongoose = require("mongoose");

const infoschema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Age:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("Info",infoschema);