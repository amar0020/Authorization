const express = require("express");

const app = express()

const {register,login}= require("./controller/auth.contoller")

const product = require("./controller/product.controller")

app.use(express.json())

app.post("/register",register);

app.post("/login", login)

app.use("/product",product)



















module.exports= app