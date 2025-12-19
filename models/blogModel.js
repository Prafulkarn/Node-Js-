const mongoose=require("mongoose")
const schema=mongoose.Schema

const blogSchema=new schema({ //object of a class named Schema
     title:String,
     subtitle:String,
     description:String
})

const Blog=mongoose.model("Blog",blogSchemaSchema)
module.exports=Blog //try this again