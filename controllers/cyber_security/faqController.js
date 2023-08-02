const  faq= require("../../models").faq
const  faq_contact= require("../../models").faq_contact
const { Op } = require("sequelize");
exports.faq=(req,res)=>{
    res.render("cyber_security/faq/add",{title:"FAQ",userdetials:req.session.user})

}


exports.faqStore=async(req,res)=>{
  let checkdata= await faq.findOne({where:{title: req.body.title.trim()}})
  if(checkdata)
  {
    req.toastr.error("Title is already exist.");

   // req.flash("error","already exist")
    return res.redirect("/faq")
  }
   
    faq.create({
        title: req.body.title.trim(),
        description: req.body.description
    })
    .then((data)=>{
    req.toastr.success("FAQ is successfully added.");

        res.redirect("/faq-list")
        // req.flash("success","Successful added")
    })
}

exports.faqList=async(req,res)=>{
   
    await faq.findAll({})
    .then((list)=>{
    res.render("cyber_security/faq/list",{title:"FAQ",userdetials:req.session.user,list:list})        
    })
    
}

exports.deletefaq=async(req,res)=>{
    await faq.destroy({where:{id:req.query.faqId}})
    .then((data)=>{
    req.toastr.success("FAQ is successfully deleted.");

        //req.flash("success","Successful deleted")
        res.redirect("/faq-list")
    })
}

exports.updatefaq=async(req,res)=>{
    await faq.findOne({where:{id:req.query.faqId}})
   .then((data)=>{
    res.render("cyber_security/faq/update",{title:"FAQ",userdetials:req.session.user,data:data})        

   })
}


exports.updatefaqStore=async(req,res)=>{
    
       let check_data= await faq.findOne({where:{title:req.body.title.trim() , id:{[Op.not]:req.body.faqId}}})
      
       if(check_data)
       {
         req.toastr.error("Title is already exist.");

     //   req.flash("error","already exist")
        return   res.redirect("/faq-list")
       }
        
    await faq.update({
        title: req.body.title.trim(),
        description: req.body.description
    },{where:{id:req.body.faqId}})
    .then((data)=>{
        req.toastr.success("FAQ is successfully updated");
        
     //   req.flash("success","Successful update")
        res.redirect("/faq-list")
    })
}


//list of 
exports.faqContactList=async(req,res)=>{
await  faq_contact.findAll({order: [
    ['id', 'DESC'],
  
]})
        .then((list)=>{
         res.render("cyber_security/faq_contact/list",{title:"Faq Contact",userdetials:req.session.user,list:list})
            
        })
}