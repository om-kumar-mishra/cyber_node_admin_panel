const security_service = require("../../models").security_service
const securityservicemaintitle = require("../../models").securityservicemaintitle

const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

// get add page
exports.getSecurityServicePage = (req, res) => {
  res.render("cyber_security/security_service/add", { title: "Security Service", userdetials: req.session.user })

}

//security service add
exports.postSecurityServicePage = async (req, res) => {
  try {
    let checkDuplicate = await security_service.findOne({ where: { title: req.body.title.trim() } })
    if (checkDuplicate) {
      req.toastr.error("Title is already exist.");
      res.redirect("/add-security-service")

    }
    let data = await security_service.create({
      icon: req.file.filename,
      title: req.body.title.trim(),
      description: req.body.description
    })
    if (data) {
      req.toastr.success("Security Status is successfully added.");

      //  req.flash('success',"Successful add") 
      res.redirect("/security-service")

    }
  }
  catch (error) {
    req.toastr.error("Security service is not added.");

    //  req.flash('error',"UnSuccessful") 
    res.render("cyber_security/security_service/add", { title: "Security Service", userdetials: req.session.user })

  }
}

// show list of security service
exports.getSecurityServiceList = async (req, res) => {
  let  banner_content= await   securityservicemaintitle.findOne({})
 let securityService_main_title=await securityservicemaintitle.findAll({})

  await security_service.findAll({})
    .then((list) => {
      res.render("cyber_security/security_service/list", { 
        title: "Security Service", 
        userdetials: req.session.user,
         list: list,
         securityService_main_title:securityService_main_title,
         banner_content:banner_content })
    })
}


//delete security service

exports.deleteSecurityService = async (req, res) => {
  try {
    await security_service.destroy({ where: { id: req.query.securityServiceId } }).then((data) => {

      req.toastr.success("Security Status is successfully deleted.");

      //   req.flash('success',"Successful deleted") 
      res.redirect("/security-service")
    }).catch((data) => {
      req.toastr.error("Security service is not deleted.");

      // req.flash('success',"not deleted") 
      res.redirect("/security-service")
    })
  }
  catch (error) {
    req.toastr.error("Security service is not deleted.");

    // req.flash('success',"not deleted ="+error.message) 
    res.redirect("/security-service")
  }
}


//get update page
exports.getUpdateSecurityServicePage = async (req, res) => {
  try {
    await security_service.findOne({ where: { id: req.query.securityServiceId } })
      .then((update_data) => {
        res.render("cyber_security/security_service/update", { title: "Security Service", userdetials: req.session.user, update_data: update_data })

      })
      .catch((error) => {
        // req.toastr.error("Security service is not deleted.");      

        //  req.flash('error',"not found ="+error.message) 
        res.redirect("/security-service")
      })

  }
  catch (error) {
    //  req.flash('error',"not found ="+error.message) 
    res.redirect("/security-service")
  }
}


//update security
exports.updateSecurityService = async (req, res) => {
  
 

  try {


    // 
      //  console.log("id====================================",req.body.securityServiceId)
    let duplicate = await security_service.findOne({ where: { title: req.body.title, id: { [Op.not]: req.body.securityServiceId } } })

    if (duplicate) {
      console.log(duplicate)
      req.toastr.error("Title is already exist.");

      //   req.flash('error',"already exist")
      return res.redirect("/security-service")
    }

    security_service.update({
      icon: (req.file) ? req.file.filename : req.body.oldImage,
      title: req.body.title,
      description: req.body.description

    }, { where: { id: req.body.securityServiceId } })
      .then(() => {
        req.toastr.success("Security Status is successfully updated.");

        // req.flash('success',"Successful updated") 
        res.redirect("/security-service")
      })
      .catch((error) => {
        //  req.flash('error',"UnSuccessful update") 
        res.redirect("/security-service")
      })
  }
  catch (error) {
    console.log("Security statu====",error.message)
   
    req.toastr.error("Security status is not updated.");

    // req.flash('error',"Error ="+error.message) 
    res.redirect("/security-service")
  }
}