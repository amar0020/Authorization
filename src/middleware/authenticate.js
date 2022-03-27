const jwt = require("jsonwebtoken")

require('dotenv').config();

const authenticate = (req,res,next)=>{

    if(!req.headers.authorization)
    return res.status(400).send({message : "Authorization token not found or incorrect"})

    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({message : "Authorization token not found or incorrect"})

    const token = req.headers.authorization.trim().split(" ")[1]

    let decoded;
    try{
        decoded =  jwt.verify(token, process.env.mysecret, (err,decoded) => {
            if(err) return (err)
    
            return (decoded)
        });
    }
    catch(err){
        console.log(err)
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    }

    req.body.userID = decoded.newuser._id;

    return next();


}


module.exports= authenticate