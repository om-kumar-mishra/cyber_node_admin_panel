const blog=require("../../models").blog
const blog_main_titledesc=require("../../models").blog_main_titledesc

const { Op } = require("sequelize");

const  path=require("path")
const fs = require('fs')
//get Case Studies  page
exports.getAddBlog=(req,res)=>{
    res.render("cyber_security/blog/add",{title:"Case Studies",userdetials:req.session.user})    
}

//Case Studies  store
exports.blogStore=async(req,res)=>{
  if( req.body.description.length==0){
    req.toastr.error("Description field is required.");
    return   res.redirect("/add-case-studies")
  }

   let checkDuplicateBlog=await blog.findOne({where:{title: req.body.title.trim()}})
   if(checkDuplicateBlog)
   {
        req.toastr.error("Title is already exist.");
        return   res.redirect("/add-case-studies")
   }
    blog.create({
        title: req.body.title.trim(),
        image: req.file.filename,
        description: req.body.description
    }).then((data)=>{

        req.toastr.success("Case Studies  is successfully added.");
        res.redirect("/case-studies-list")
       
    })
    .catch((error)=>{
        req.toastr.error("Case Studies  is not added.")
        res.redirect("/add-case-studies")
    })
}



//show Case Studies  list
exports.blogsList=async(req,res)=>{
  let blog_main_title=await blog_main_titledesc.findOne({})
  await   blog.findAll({})
     .then((BlogList)=>{
      res.render("cyber_security/blog/list",{title:"Case Studies",
      userdetials:req.session.user,
      BlogList:BlogList,
      blog_main_title:blog_main_title})    
        
     })
     .catch((error)=>{

     //   req.flash("error","not found ")
        res.redirect("/case-studies-list")

     })
}


//delete blog
exports.deleteBlog=async(req,res)=>{
   console.log('id==',req.query); 
   await blog.destroy({where:{id:req.query.id}})
   .then((data)=>{

        req.toastr.success("Case Studies  is Successfully deleted.");
      
      //  req.flash("success","Successful deleted")
        res.redirect("/case-studies-list")

   })
   .catch((error)=>{
    // console.log(first)
    req.toastr.error("Case Studies  is not deleted.");

   // req.flash("error","Case Studies  is not deleted")
    res.redirect("/case-studies-list")
   })
}

//get Case Studies  page

exports.updateBlog=(req,res)=>{
    blog.findOne({where:{id:req.query.id}})
    .then((updateBlog)=>{
      res.render("cyber_security/blog/update",{title:"Case Studies",userdetials:req.session.user,updateBlog:updateBlog})    
    })
   
}

//update data store

exports.updateStore=async(req,res)=>{
  if( req.body.description.length==0){
    req.toastr.error("Description field is required.");
    return  res.redirect("/case-studies-list")

  }



    let checkDuplicateBlog=await blog.findOne({where:{title: req.body.title.trim() , id:{[Op.not]:req.body.blogId}}})
    if(checkDuplicateBlog)
    {
     req.toastr.error("Title is already exist.");

      //req.flash("error","Title is already exist")
      return   res.redirect("/case-studies-list")
    }
   await blog.update({
        title: req.body.title.trim(),
        image: (req.file)?req.file.filename:req.body.oldImage,
        description: req.body.description
    },{where:{id:req.body.blogId}})
    .then((data)=>{

        req.toastr.success(" Case Studies  is successfully updated.");
       // req.flash("success","successful updated")
        res.redirect("/case-studies-list")
    })
    .catch((error)=>{
        req.toastr.error(" Case Studies  is not updated.");      
       // req.flash("error","faild ")
        res.redirect("/case-studies-list")
    })
}


//main title and description

exports.titleAndDescriptionUpdateStore = async (req, res) => {
  
  try {
    if(req.body.id )
    {
      let checkDuplicate = await blog_main_titledesc.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
      if (checkDuplicate) {
          req.toastr.error("type is already exist");
          return res.redirect("/case-studies-list")
      }
      let update = await blog_main_titledesc.update({
          title: req.body.title.trim(),
          description: req.body.description
      }, { where: { id: req.body.id } })

      if (update) {
          req.toastr.success("Case Studies main title and description is successfully updated");
          res.redirect("/case-studies-list")
      }
    }
    else{
      let checkDuplicate = await blog_main_titledesc.findOne({ where: { title: req.body.title.trim() } })
      if (checkDuplicate) {
          req.toastr.error("Case Studies main title and description already exists.");
          return res.render("main_title_and_des/blog_main_title_desc/add", { title:"Case Studies Main Title And Description", userdetials: req.session.user })

      }
      let data = await blog_main_titledesc.create({
          title: req.body.title.trim(),
          description: req.body.description
      })

      req.toastr.success("Case Studies main title and description is successfully added.");
      res.redirect("/case-studies-list")
    }
     
  }
  catch (error) {
      let banner_content = await blog_main_titledesc.findOne({ where: { id: req.body.id } })
      req.toastr.error("Case Studies main title and description is not updated");
      res.render("main_title_and_des/blog_main_title_desc/update", { title:"Case Studies Main Title And Description", userdetials: req.session.user, banner_content: banner_content })


  }
}
