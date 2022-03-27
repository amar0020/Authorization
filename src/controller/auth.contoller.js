const express = require("express");

const User = require("../module/user.module")

const router = express.Router();

const jwt = require("jsonwebtoken");

require('dotenv').config();

const newtoken= (user)=>{
    return  jwt.sign({user}, process.env.mysecret)
}



const register = async (req,res)=>{
    try{
        
        const user = await User.findOne({email:req.body.email})

        if(user){
           return res.send({message:"email already exists"})
        }

        const newuser = await User.create(req.body);

        var token = jwt.sign({newuser},process.env.mysecret)


        return res.send({newuser, token})

    }
    catch{
        console.log("registration not completed")
    }
}

const login = async (req,res)=>{
    const newuser = await User.findOne({email:req.body.email})
    const match =  user.checkpassword(req.body.password)

    if(!newuser){
       return res.send({message:"Wrong email or password"})
    }

    console.log(match)

    if(!match){
        return res.send({message:"Wrong email or passwsssdord"})
    }

    var token = newtoken(user)

    return res.send({newuser, token})

}


module.exports= {register,login}




