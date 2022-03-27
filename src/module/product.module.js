
const mongoose = require("mongoose");



const productSchema = mongoose.Schema({
    p_name:{type:String, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"user"},
    type:[{type:String, required:true}]
})


const product = mongoose.model("product",productSchema)

module.exports= product