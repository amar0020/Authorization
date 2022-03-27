




const authorise = (permittedrole)=>{

    return async (req,res,next)=>{
        let flag=false

        users= req.user

        permittedrole.map((role)=>{
            if(users.role.includse(role)) flag =true
        })

        if(flag===true) return next
        else res.send("you are not authorize to access this")
    }

}

module.exports= authorise