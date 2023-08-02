const bannerContent=require("../../models").bannerContent
const { Op } = require("sequelize");


exports.getBannerAddPage=(req,res)=>{
    res.render("cyber_security/bannerContent/add",{title:"Second Section",userdetials:req.session.user})
}
 

exports.postBannerContent=async(req,res)=>{

    try{
       let checkBannerContent=await bannerContent.findOne({where:{type: req.body.type.trim()}})
       if(checkBannerContent)
       {
       // req.toastr.error("Banner content is already exist.");
        req.toastr.error("Banner content is already exist.");
      //  req.flash('error',"banner content is already exist") 
        return  res.render("cyber_security/bannerContent/add",{title:"Second Section",userdetials:req.session.user})
    
       }
        let data=await   bannerContent.create({
            type: req.body.type.trim(),
            description: req.body.description
        })

        req.toastr.success("Second Section content is successfully added.");
        //req.flash('success',"Successful add")
        res.redirect("/get-second-section-list")
    }
    catch(error)
    {
        req.toastr.error("Banner Content is not added");
        //req.flash('error',"Successful add ="+error.message)
        return  res.render("cyber_security/bannerContent/add",{title:"Second Section",userdetials:req.session.user})
    }

}




exports.getBannerContentList=async(req,res)=>{
    let bannerContentList
    try{

         //req.toastr.error("Banner Content is not added");        
         bannerContentList =await   bannerContent.findAll({})
         res.render("cyber_security/bannerContent/list",{title:"Second Section",userdetials:req.session.user,bannerContentList:bannerContentList})
    }
    catch(error)
    {
        req.toastr.error("Banner Content list is not added"); 
       // req.flash('error',"Banner list is not found") 
        res.render("cyber_security/bannerContent/list",{title:"Second Section",userdetials:req.session.user,bannerContentList:bannerContentList})
    }

}

//delete
exports.deleteBannerContent=async(req,res)=>{
    try{
     await   bannerContent.destroy({where:{id:req.query.bannerContentId}})
     req.toastr.success("Second Section Content is successfully deleted"); 

   //  req.flash('success',"deleted") 
     res.redirect("/get-second-section-list")
    }
    catch(error){

       req.toastr.error("Banner Content is not deleted"); 
        
       // req.flash('error',"not delete ="+error.message)
        res.redirect("/get-second-section-list")
    }
}

//get update page
exports.getUpdateBannerContentPage=async(req,res)=>{
//   let banner_content=await bannerContent.findOne({where:{id:req.query.bannerContentId}})
//   res.render("cyber_security/bannerContent/update",{title:"Second Section",userdetials:req.session.user,bannerContent:bannerContent})
    try{
       console.log("iddddd=====",req.query.bannerContentId)
     let  banner_content= await   bannerContent.findOne({where:{id:req.query.bannerContentId}})
        res.render("cyber_security/bannerContent/update",{title:"Second Section",userdetials:req.session.user,banner_content:banner_content})
    
    }
    catch(error){
        console.log("===============",error.message)
       req.toastr.error("Banner Content page is not found"); 

       // req.flash('error',"data not found ="+error.message)
        res.redirect("/get-second-section-list")
    }

     
}

//update

exports.UpdateBannerContentPage=async(req,res)=>{
    try{
        let  banner_content= await   bannerContent.findOne({where:{ type: req.body.type.trim() ,id:{[Op.not]:req.body.b_Id}}})
        if(banner_content)
        {
            req.toastr.error("type is already exist");           
         return   res.redirect("/get-second-section-list")
        }
       let update= await  bannerContent.update({
            type: req.body.type.trim(),
            description: req.body.description
         },{where:{id:req.body.bannerContentId}})

         if(update)
         {
            req.toastr.success("Second Section Content is successfully updated");          
            res.redirect("/get-second-section-list")
         }
    }
    catch(error){
        let  banner_content= await   bannerContent.findOne({where:{id:req.body.bannerContentId}})
        req.toastr.error("Banner Content is not updated");           
        res.render("cyber_security/bannerContent/update",{title:"Second Section",userdetials:req.session.user,banner_content:banner_content})
       
        
    }
}