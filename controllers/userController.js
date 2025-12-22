const jwt=require("jsonwebtoken")
const User = require("../models/userModel")
const bcrypt=require("bcrypt")

exports.homepage=function(req,res){  /*get is a method here "/"  is route/api...can be named anything..
    request,response is a format */
    res.json({
        name:"Home Page"

    })
}

 exports.fetchuser=async function(req,res){
    //response to user table ma vako user data sent garnu parxa
   const data=await User.find()
   res.json({
          data:data //should be the variable name or just data and do the same for blog
   })
}
exports.login=async function(req,res){
    //console.log(req.body)
    const email=req.body.email
    const password=req.body.password
    //const {email,password}=req.body
    const data=await User.findOne({email:email})

    //console.log(data)

    if(!data){
        res.json({
            message:"Not registered"
        })
    }else{
        const isMatched =bcrypt.compareSync(password,data.password)
        if(isMatched){
            const token=jwt.sign({name:"Praful"},process.env.JWT_SECRET,{
                expiresIn:"1d"
            })
            res.json({
                message:"Logged in successfully"
            })

        }else{
            res.json({
                message:"invalid password"
            })
        }
    }
}

exports.updateuser=async function(req,res){
    const id=req.params.id
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password

    await User.findByIdAndUpdate(id,{
        name:name,
        email:email,
        password:bcrypt.hashSync(password,10)
    })
    res.json({
        message:"user updated successfully"
    })
}

exports.fetchuserbyid=async function(req,res){ //: makes it dynamic so we put id number ->req.params."id number"
    
    const data= await User.findById(req.params.id).select(["-password","-__v"]) //password na pathaune
     res.json({
          data:data
     })
}


exports.userRegister=async function (req,res){
    // console.log(req) //object where info of client comes is called req
    //console.log(req.body) //data always comes in req.body
    const name=req.body.name
     const email=req.body.email
      const password=req.body.password
      //const{name,email,password}=req.body
      //console.log(name,email,password)

    await User.create({
         name:name,  //left column name-> right: values
        email:email,
        password:bcrypt.hashSync(password,10) //10 is a salting number->strenghth of encryption

      })
      res.json({
    message:"user registered successfully"
})

      }

exports.deletebyid=async function(req,res){ //: makes it dynamic so we put id number ->req.params."id number"
    const id=req.params.id
     await User.findByIdAndDelete(id)
     res.json({
          message:"User with that id deleted successfully !!"
     })
}




