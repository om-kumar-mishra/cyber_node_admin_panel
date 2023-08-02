const why_we=require("../../models").why_we
const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')
exports.whyWe=(req,res)=>{
    res.render("cyber_security/why_we/add",{title:"Why We",userdetials:req.session.user})
    
}


exports.whyWeStore=async(req,res)=>{
   let check_data=await why_we.findOne({where:{title: req.body.title.trim()}})
   if(check_data)
   {

    req.toastr.error(" Title is already exist.");      

   //   req.flash("error","already exist")
   return res.redirect("/why-we")
   }
    why_we.create({
        title: req.body.title.trim(),
        image: req.file.filename,
        description: req.body.description
    })
    .then((data)=>{
    req.toastr.success(" 'Why we are' is successfully added.");      

    //    req.flash("success","successful added")
        res.redirect("/why-we-list")
    })
}

exports.whyWeList=(req,res)=>{
    why_we.findAll({})
    .then((data)=>{
    res.render("cyber_security/why_we/list",{title:"Why We",userdetials:req.session.user,list:data})

    })
}

exports.deletewhyWe=async(req,res)=>{
    why_we.destroy({where:{id:req.query.whyWeId}})
    .then((data)=>{
    req.toastr.success(" 'Why we are' is successfully deleted.");      

      //  req.flash("success","successful deleted")
        res.redirect("/why-we-list")
    })
}


exports.updateWhyWe=(req,res)=>{
    why_we.findOne({where:{id:req.query.whyWeId}})
    .then((data)=>{
    res.render("cyber_security/why_we/update",{title:"Why We",userdetials:req.session.user,data:data})

    })
}

exports.updateWhyWeStore=async(req,res)=>{

    let check_data=await why_we.findOne({where:{title:req.body.title.trim(), id:{[Op.not]:req.body.whyWeId}}})
   if(check_data)
   {
    req.toastr.error(" Title is already exist.");      
     

   // req.flash("error","already exist")
   return res.redirect("/why-we-list")
   }

//duplicate image
//    console.log("=============",path.join(__dirname,"..","..","public","/uploaded-files",`${req.body.oldImage}`))
   
console.log("=======",req.body.image)
   await why_we.update({
        title: req.body.title.trim(),
        image: (req.file)?req.file.filename:req.body.oldImage,
        description: req.body.description
    },{where:{id:req.body.whyWeId}})
    .then((data)=>{
    req.toastr.success(" 'Why we are' is successfully updated.");      

      //  req.flash("success","successful update")
        res.redirect("/why-we-list")
    })
}