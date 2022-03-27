const app = require("./index")

const connect = require("./config/db")



app.listen(2000, async ()=>{
    try{
        await connect()
        console.log("listening")
    }
    catch(err){
        console.log(err.message)
    }
    
})