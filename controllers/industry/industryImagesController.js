const industry_images=require("../../models").industry_images
const industry_details=require("../../models").industry_details

const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')


//get add main service
exports.addIndustryImage=(req,res)=>{
  let industryId=req.query.industryId
    res.render("industry/industry_images/add",{title:"Industry Images",
    userdetials:req.session.user,
    industryId:industryId})

}



//add main service
exports.postIndustryImage=async(req,res)=>{
        try{
       
            industry_images.create({
                image: req.file.filename.trim(),
                industryId:req.body.industryId,
            }).then((data)=>{
               req.toastr.success("Indutry Images  is successfully added.");
                 res.redirect("/industry-details-list")
            }).catch((error)=>{
               req.toastr.error("Indutry Images  is not added.");
                 res.redirect("/industry-details-list")
            })

        }
        catch(error){
               req.toastr.error("Indutry Images  is not added.");                        
                 res.redirect("/industry-details-list")
        }
}



//get list of main service
exports.industryImageList=async(req,res)=>{
  let industryId=req.query.industryId
     try{
       let list=await industry_images.findAll({
        include: [{
          model: industry_details,
          as: "industry"
      }],
        where:{industryId:industryId}
       })
       res.render("industry/industry_images/list",{title:"Industry Images",
       userdetials:req.session.user,
       list:list,
       industryId:industryId})

     }

     catch(error){
      console.log("error====================",error)
        req.toastr.error("Indutry Images  is not found.");
        res.redirect("/industry-details-list")
     }
}


//

//delete main service
exports.deleteIndustryImage=async(req,res)=>{
   await industry_images.destroy({where:{id:req.query.id}})
   .then((data)=>{
    req.toastr.success("Indutry Images  is successfully deleted .");
    res.redirect("/industry-details-list")
   })
   .catch((error)=>{
    req.toastr.success("Indutry Images  is not deleted .");
    res.redirect("/industry-details-list")
   })
}


//get update page
exports.updateIndustryImage=async(req,res)=>{
    console.log(":req.query.id=======",req.query.id)
   await industry_images.findOne({where:{id:req.query.id}})
   .then((update)=>{
    res.render("industry/industry_images/update",{title:"Industry Images",userdetials:req.session.user,update:update})
      
   })
   .catch((error)=>{
    req.toastr.error("Indutry Images  is not found .");
    res.redirect("/industry-details-list")
   })

}




exports.updateIndustryImageStore=async(req,res)=>{  
  
  let oldData=await industry_images.findOne({where:{id:req.body.id}})
      await industry_images.update({
         image: (req.file)?req.file.filename:oldData.oldImage,
     },{where:{id:req.body.id}})
     .then((data)=>{
     req.toastr.success("Indutry Images  is successfully  added.");
         res.redirect("/industry-details-list")
     })
     .catch((error)=>{  
       req.toastr.error("Indutry Images  is not  updated.");
         res.redirect("/industry-details-list")
     })
    }
