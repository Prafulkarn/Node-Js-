require("dotenv").config() //.env file used to write confidentail info

const express=require("express") 
const dbSangaConnection = require("./database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blogModel")
const app=express()
const bcrypt=require("bcrypt")
const { fetchuser, fetchuserbyid, userRegister, deletebyid, updateuser, login, homepage } = require("./controllers/userController")
const { fetchblogbyid, fetchblogs, blogregister, deleteblog } = require("./controllers/blogController")


dbSangaConnection()
app.use(express.json()) //to make the file understand json data

app.get("/",homepage) //if its not here no response will be sent...buffering continues


app.get("/about",function(req,res){  //routing by/about
    res.json({
        address:"About us address",
        age:23,
        name:"Praful Karn"
    })
})

app.get("/fetch-users",fetchuser) 
// response ma user table ma vako user data find garne
app.get("/fetchusers/:id",fetchuserbyid)

//for blog to find by id
app.get("/fetchblogs/:id",fetchblogbyid)


app.get("/fetch-blogs",fetchblogs)
//if database is MongoDb then mongoose is your ORM tool....to check it go to your package json 


app.post("/register",userRegister)
app.delete("/delete/:id",deletebyid)
app.delete("/delete",async function(req,res){ 
    const id=req.body.id
     await User.findByIdAndDelete(id)
     res.json({
          message:"User with that specific id deleted successfully !!"
     })
})
//Create and delete of Blog
app.post("/registerblog",blogregister)
app.delete("/deleteblog",deleteblog)
//for update of user
app.patch("/update-user/:id",updateuser)

//login
app.post("/login",login)

//jwd is a package used to generate token....Json web token














//for update of blog
app.patch("/update-blog/:id",async function(req,res){
    const id=req.params.id
    const title=req.body.title
    const subtitle=req.body.subtitle
    const description=req.body.description

    await Blog.findByIdAndUpdate(id,{
        title,
        subtitle,
        description
    })
    res.json({
        message:"blog updated successfully !"
    })
})

//token->jwd


















app.listen(3000,function(){
     console.log("server has started at port 3000")
})
//create table named Blog in other file->keep title,subtitle,description