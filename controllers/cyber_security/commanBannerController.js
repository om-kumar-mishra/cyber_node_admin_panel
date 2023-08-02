const comman_banner=require("../../models").comman_banner
const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')

exports.addBanner=(req,res)=>{
    res.render("cyber_security/comman_banner/add",{title:"comman banner",userdetials:req.session.user})
}



exports.PostBanner=async(req,res)=>{

// let checkDuplicateBanner=await comman_banner.findOne({where:{title: req.body.bannerTitle.trim()}})
//     if(checkDuplicateBanner)
//     {
//        req.toastr.error("Comman Banneris already exist.");
//        return   res.redirect("/add-banner")

//     }
 let data= await comman_banner.create({
        image: req.file.filename,
        title:null,
       
    })
    req.toastr.success("Comman Banner is successfully added.");
   // req.flash('success',"successful add")
    res.redirect("/get-comman-banner-list") 
}





exports.bannerList=async(req,res)=>{
   let banner=await comman_banner.findAll({})
    res.render("cyber_security/comman_banner/list",{title:"comman banner",userdetials:req.session.user,banner:banner})

}



exports.deleteBanner=async(req,res)=>{
 let data=   await comman_banner.destroy({where:{id:req.query.bannerId}})
 
    req.toastr.success("Comman Banner is successfully deleted.");

    res.redirect("/get-comman-banner-list")
 
        

}



exports.updateBanner=async(req,res)=>{

  let updateBanner=  await comman_banner.findOne({})
    res.render("cyber_security/comman_banner/update",{title:"comman banner",userdetials:req.session.user,updateBanner:updateBanner})   

}




exports.updateBannerById=async(req,res)=>{
    if(req.body.b_Id)
    {
        let updateBannerImage=  await comman_banner.findOne({where:{id:req.body.b_Id}})     
        await comman_banner.update({
              image: (req.file)?req.file.filename:updateBannerImage.image,
              title:null,
          },{where:{id:req.body.b_Id}}).then((data)=>{
              req.toastr.success("Comman Banner is successfully updated.");   
              res.redirect("/update-comman-banner")
          }).catch((data)=>{
              req.toastr.error("Comman Banner is not updated.");   
              res.render("cyber_security/comman_banner/update",{title:"comman banner",userdetials:req.session.user,updateBanner:updateBanner,errorMessage:"Comman Banner is not updated"})
          })
    }
    else{
        let data= await comman_banner.create({
            image: req.file.filename,
            title:null,
           
        })
        req.toastr.success("Comman Banner is successfully added.");
     
        res.redirect("/update-comman-banner") 

    }
  
}