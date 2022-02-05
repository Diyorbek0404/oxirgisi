const mongoose = require("mongoose");

const XodimSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    tel:{
        type:String,
        required:true,
        unique:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    toifa:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Xodim", XodimSchema)