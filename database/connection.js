const mongoose= require("mongoose")

async function dbSangaConnection(){ //camelcase->first word small ,next word first letter capital
    await mongoose.connect("mongodb+srv://nodejsworkshop:karnpraful@cluster0.ckwwfpv.mongodb.net/?appName=Cluster0")
    console.log("DB connected successfully !!!")
    //async ->to use await use async in function name
    //await->to give the response time to query

}
//to export a function
module.exports = dbSangaConnection
