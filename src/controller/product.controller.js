const express = require("express");

const router = express.Router()

const authenticate = require("../middleware/authenticate");
const product = require("../module/product.module");

const authorise = require("../middleware/authorise")


router.post("", authenticate, authorise(["seller","admin"]), async (req,res)=>{
    const data = await product.create(req.body)
    res.send(data)
})

router.patch("/:id",authenticate,authorise(["seller","admin"]), async (res,req)=>{
    const data = await product.findById(req.params.id)

    if(req.body.userID==data.userID){
        const data = await product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(data)
    }
    else{
        res.send({message:"product not created or another seller product"})
    }
})


router.post("")
module.exports= router