const express=require("express") 
const app=express()


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


app.listen(3000,function(){
     console.log("server has started at port 3000")
})