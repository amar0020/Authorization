const mongoose = require("mongoose");

const bcrypt = require("bcrypt")

const UserSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, }
})


UserSchema.pre("save",  async function  (next){
    const hashing =  bcrypt.hashSync(this.password, 8) 
    this.password=hashing
    return next()
   
})

UserSchema.methods.checkpassword = function (password){
    return bcrypt.compareSync(password, this.password)


}

const User = mongoose.model("user", UserSchema)


module.exports = User