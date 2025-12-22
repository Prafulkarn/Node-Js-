

exports.fetchblogbyid=async function(req,res){ //: makes it dynamic so we put id number ->req.params."id number"
    
    const data= await Blog.findById(req.params.id).select(["-__v"]) //v na pathaune
     res.json({
          data:data
     })
}
 exports.fetchblogs=async function(req,res){
    const blog=await Blog.find()
    res.json({
        blog

    })
}
exports.blogregister=async function(req,res){
    //console.log(req.body)
    const title=req.body.title
    const subtitle=req.body.subtitle
    const description=req.body.description

    await Blog.create({
        title:title,
        subtitle:subtitle,
        description:description
    })
     res.json({
        message:"Blog registered successfully"
    })
}

exports.deleteblog=async function(req,res){
    const id=req.body.id
    await Blog.findByIdAndDelete(id)
    res.json({
        message:"blog of specified Id deleted successfully"
    })
}

