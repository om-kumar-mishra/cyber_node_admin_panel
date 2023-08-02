const mainService = require("../../models").main_service
const main_service_main_titledesc = require("../../models").main_service_main_titledesc

const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')



//get add main service
exports.getAddMainServicePage = (req, res) => {
   res.render("cyber_security/main_service/add", {title:"Main Service", userdetials: req.session.user })

}



//add main service
exports.postMainService = async (req, res) => {
   try {
      let checkDuplicate = await mainService.findOne({ where: { title: req.body.title.trim() } })
      if (checkDuplicate) {
         req.toastr.error("Title is already exist.");
         // req.flash('error',"already exist") 
         return res.redirect("/main-service-list")
      }
      mainService.create({
         image: req.files?.image[0]?.filename,
         title: req.body.title,
         description: req.body.description,
         image2:req.files?.image2[0]?.filename,
         status:0
      }).then((data) => {
         req.toastr.success("High Performance is successfully added.");

        
         res.redirect("/main-service-list")
      }).catch((error) => {
         req.toastr.error("Main Service is not added.");
       
         //     req.flash('error',"UnSuccessful") 
         res.redirect("/main-service-list")
      })

   }
   catch (error) {

      req.toastr.error("Main Service is not added.");
      // req.flash('error',"UnSuccessful") 
      res.redirect("/main-service-list")
   }
}

//get list of main service
exports.getMainServiceList = async (req, res) => {
   let main_service_title = await main_service_main_titledesc.findOne({})
   try {
      let main_service_list = await mainService.findAll({})
      res.render("cyber_security/main_service/list", {
        title:"Main Service", userdetials: req.session.user,
         main_service_list: main_service_list,
         main_service_title: main_service_title
      })

   }
   catch (error) {
      req.toastr.error("Main Service is not found.");

      //  req.flash('error',"UnSuccessful") 
      res.redirect("/main-service-list")
   }
}

//delete main service
exports.deleteMainService = async (req, res) => {
   await mainService.destroy({ where: { id: req.query.mainServiceId } })
      .then((data) => {
         req.toastr.success("Main Service is successfully deleted .");

         // req.flash('success',"Successful deleted") 
         res.redirect("/main-service-list")
      })
      .catch((error) => {
         req.toastr.success("Main Service is not deleted .");

         //req.flash('success',"delete unSuccessful") 
         res.redirect("/main-service-list")
      })
}

//get update page

exports.getUpdateMainServicePage = async (req, res) => {

   await mainService.findOne({ where: { id: req.query.mainServiceId } })
      .then((update) => {
         res.render("cyber_security/main_service/update", {title:"Main Service", userdetials: req.session.user, update: update })

      })
      .catch((error) => {
         req.toastr.error("Main Service is not found .");

         //req.flash('error',"not found") 
         res.redirect("/main-service-list")
      })

}


exports.updateMainService = async (req, res) => {
   console.log("files============",req.files,"Req.body================",req.body)
  
   let checkDuplicate = await mainService.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.mainServiceId } } })
   if (checkDuplicate) {
      req.toastr.error("Title is already exist .");
      return res.redirect("/main-service-list")
   }

   let oldImage=await mainService.findOne({where:{id:req.body.mainServiceId}})

   await mainService.update({
      image: (req.files.image) ? req.files.image[0].filename :oldImage.image,
      title: req.body.title.trim(),
      description: req.body.description,
      image2:(req.files.image2)?req.files.image2[0].filename :oldImage.image2,
   }, { where: { id: req.body.mainServiceId } })
      .then((data) => {

         req.toastr.success("Main Service is successfully  upadated.");
         res.redirect("/main-service-list")
      })
      .catch((error) => {
         req.toastr.error("Main Service is not  updated.");

         // req.flash('error',"faild") 
         res.redirect("/main-service-list")
      })
}




// main title 

exports.titleAndDescriptionUpdateStore = async (req, res) => {
   try {
      let check_main_title = await main_service_main_titledesc.findOne({})
      if (check_main_title) {
         let checkDuplicate = await main_service_main_titledesc.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
         if (checkDuplicate) {
            req.toastr.error("type is already exist");
            return res.redirect("/main-service-list")
         }
         let update = await main_service_main_titledesc.update({
            title: req.body.title.trim(),
            description: req.body.description
         }, { where: { id: req.body.id } })

         if (update) {
            req.toastr.success("Main Service main title and description is successfully updated");
            res.redirect("/main-service-list")
         }
      }
      else {

         let checkDuplicate = await main_service_main_titledesc.findOne({ where: { title: req.body.title.trim() } })
         if (checkDuplicate) {
            req.toastr.error("Main Service main title and description already exists.");
            return res.render("main_title_and_des/main_service_main_title_desc/add", { title: "Main Service Main Title And Description", userdetials: req.session.user })

         }
         let data = await main_service_main_titledesc.create({
            title: req.body.title.trim(),
            description: req.body.description
         })

         req.toastr.success("Main Service main title and description is successfully added.");
         res.redirect("/main-service-list")
      }
   }
   catch (error) {
      let banner_content = await main_service_main_titledesc.findOne({ where: { id: req.body.id } })
      req.toastr.error("Main Service main title and description is not updated");
      res.render("main_title_and_des/main_service_main_title_desc/update", { title: "Main Service Main Title And Description", userdetials: req.session.user, banner_content: banner_content })


   }
}