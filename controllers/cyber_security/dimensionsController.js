const innovative=require("../../models").innovative
const innovation_main_titledesc=require("../../models").innovation_main_titledesc

const { Op } = require("sequelize");
const  path=require("path")
const fs = require('fs')

exports.getInnovative=(req,res)=>{
    res.render("cyber_security/innovative/add",{title:"5 Dimensions Of Info&Tech",userdetials:req.session.user})
}





exports.innovativeStore=async(req,res)=>{
   
    let checkDuplicateBanner=await  innovative.findOne({where:{title: req.body.title.trim()}})
        if(checkDuplicateBanner)
        {  
           req.toastr.error("title is already exist.");
          // req.flash('error',"banner is already exist") 
          return   res.redirect("/dimensions-info_tech-list")
    
        }


     let data= await  innovative.create({
        title: req.body.title.trim(),
        description: req.body.description,
      
        })
        req.toastr.success("5 Dimensions Of Info&Tech is successfully added.");
       // req.flash('success',"successful add")
        res.redirect("/dimensions-info_tech-list") 
    }

    
    exports.innovativeList=async(req,res)=>{
        
      let innovation_main_title=await  innovation_main_titledesc.findOne({})
        innovative.findAll({})
        .then((data)=>{
           res.render("cyber_security/innovative/list",{
           title:"5 Dimensions Of Info&Tech",
           userdetials:req.session.user,
           list:data,
           innovation_main_title:innovation_main_title})  
        })
    }

    exports.deleteInnovative=(req,res)=>{
        innovative.destroy({where:{id:req.query.id}})
        .then((data)=>{
            req.toastr.success("5 Dimensions Of Info&Tech is successfully deleted.");
            res.redirect("/dimensions-info_tech-list")
        })
        .catch((error)=>{
            req.toastr.error("Something unexpected happend.");
            res.redirect("/dimensions-info_tech-list")
        })
    }

    exports.updatePage=(req,res)=>{

        innovative.findOne({where:{id:req.query.id}})
        .then((data)=>{
          res.render("cyber_security/innovative/update",{title:"5 Dimensions Of Info&Tech",userdetials:req.session.user,data:data})    
        })
    }

    exports.innovativeUpdateStore=async(req,res)=>{

      
       let check_title=  await innovative.findOne({where:{title:req.body.title.trim() ,id:{[Op.not]:req.body.id}}})
       //let updateBannerImage=  await innovative.findOne({where:{id:req.body.innovativeId}})
     
         
   
       
   
              if(check_title)
              {
             req.toastr.error("Title is already exist.");  
               //req.flash('error',"title already exist")
              return res.redirect("/dimensions-info_tech-list")
              }

        innovative.update({
            title: req.body.title.trim(),
            description: req.body.description,
            
        },{where:{id:req.body.id}})
        .then((data)=>{
            req.toastr.success("5 Dimensions Of Info&Tech is sucessfully updated.");
            res.redirect("/dimensions-info_tech-list")
        })
        .catch((error)=>{
            req.toastr.error("Something unexpected happend.");
            res.redirect("/dimensions-info_tech-list")
        })
    }




    //main title
    exports.titleAndDescriptionUpdateStore = async (req, res) => {
        try {
            if(req.body.id)
            {
                let checkDuplicate = await innovation_main_titledesc.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
                if (checkDuplicate) {
                    req.toastr.error("type is already exist");
                    return res.redirect("/dimensions-info_tech-list")
                }
                let update = await innovation_main_titledesc.update({
                    title: req.body.title.trim(),
                    description: req.body.description
                }, { where: { id: req.body.id } })
        
                if (update) {
                    req.toastr.success("5 Dimensions Of Info&Tech main title and descriptionis successfully updated");
                    res.redirect("/dimensions-info_tech-list")
                }
            }
            else{
                let checkDuplicate = await innovation_main_titledesc.findOne({ where: { title: req.body.title.trim() } })
                if (checkDuplicate) {
                    req.toastr.error("5 Dimensions Of Info&Tech main title and descriptionis already exist.");
                    return res.render("main_title_and_des/innovative_main_title_desc/add", { title: "5 Dimensions Of Info&Tech Main Title And Description", userdetials: req.session.user })
        
                }
                let data = await innovation_main_titledesc.create({
                    title: req.body.title.trim(),
                    description: req.body.description
                })
        
                req.toastr.success("5 Dimensions Of Info&Tech main title and descriptionis successfully added.");
                res.redirect("/dimensions-info_tech-list")
            }
          
        }
        catch (error) {
            let banner_content = await innovation_main_titledesc.findOne({ where: { id: req.body.id } })
            req.toastr.error("5 Dimensions Of Info&Tech main title and descriptionis not updated");
            res.render("main_title_and_des/innovative_main_title_desc/update", { title: "5 Dimensions Of Info&Tech Main Title And Description", userdetials: req.session.user, banner_content: banner_content })
    
    
        }
    }