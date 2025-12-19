const express=require("express") 
const dbSangaConnection = require("./database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blogModel")
const app=express()

dbSangaConnection()

app.get("/",function(req,res){  /*get is a method here "/"  is route/api...can be named anything..
    request,response is a format */
    res.json({
        name:"Home Page"

    }) //if its not here no response will be sent...buffering continues
})


app.get("/about",function(req,res){  //routing by/about
    res.json({
        address:"About us address",
        age:23,
        name:"Praful Karn"
    })
})

app.get("/fetch-users",async function(req,res){
    //response to user table ma vako user data sent garnu parxa
   const data=await User.find()
   res.json({
          data:data //should be the variable name or just data and do the same for blog
   })
})

app.get("/fetch-blogs",async function(req,res){
    const blog=await Blog.find()
    res.json({
        blog

    })
})
//if database is MongoDb then mongoose is your ORM tool....to check it go to your package json 

app.listen(3000,function(){
     console.log("server has started at port 3000")
})
//create table named Blog in other file->keep title,subtitle,description