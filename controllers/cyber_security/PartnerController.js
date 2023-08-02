const partner = require("../../models").partner
const path = require("path")
const fs = require("fs")
const { Op } = require("sequelize");

exports.getAddPartnerPage = (req, res) => {
  res.render("cyber_security/partner/add", { title: "Partner", userdetials: req.session.user })
}


exports.postPartner = async (req, res) => {
  try {
    let check_duplicate_icon = await partner.findOne({ where: { icon: req.files.icon[0]?.filename } })
    if (check_duplicate_icon) {
      req.toastr.error("Icon is already exist.");

      // req.flash('error',"icon is already exist") 
      return res.render("cyber_security/partner/add", { title: "Partner", userdetials: req.session.user })

    }

    let data = partner.create({
      icon: req.files.icon[0]?.filename,
      // icon1: req.files.icon2[0]?.filename,
      link: null
    })
    if (data) {
      req.toastr.success("Partner is successfully added.");
      //   req.flash('success',"Successful add") 
      res.redirect("/partner-list")
    }
  }

  catch (error) {

    // req.flash('error',"faild try again") 
    return res.render("cyber_security/partner/add", { title: "Partner", userdetials: req.session.user })

  }
}

//get parter icon list

exports.getPartnerList = async (req, res) => {
  try {
    let partner_list = await partner.findAll({})
    res.render("cyber_security/partner/list", { title: "Partner", userdetials: req.session.user, partner_list: partner_list })

  }
  catch (error) {

    // req.flash('error',"list is not found ="+error.message) 
    console.log("error=====", error)
    res.render("cyber_security/partner/add", { title: "Partner", userdetials: req.session.user })

  }

}

exports.deletePartnerIcon = async (req, res) => {
  try {
    let deletePartner = await partner.destroy({ where: { id: req.query.PartnerId } })
    if (deletePartner) {
      req.toastr.success("Partner is successfully deleted.");

      //  req.flash('success',"Successful deleted") 
      res.redirect("/partner-list")
    }
  }
  catch (error) {
    req.toastr.error("Partner is not deleted.");

    // req.flash('error',"unSuccessful delete ="+error.message) 
    res.redirect("/partner-list")
  }
}

exports.getPartnerUpdatePage = async (req, res) => {
  try {
    let update_data = await partner.findOne({ where: { id: req.query.PartnerId } })
    res.render("cyber_security/partner/update", { title: "Partner", userdetials: req.session.user, update_data: update_data })

  }
  catch (error) {
    //  req.flash('error',"UnSuccessful  ="+error.message) 
    res.redirect("/partner-list")
  }
}

exports.updatePartner = async (req, res) => {


  try {
    //   let check_duolicate_icon=await  partner.findOne({where:{ icon:req.files?.icon[0]?.filename ,id:{[Op.not]:req.body.partnerId}}})
    //   let check_duplicate_icon2=await  partner.findOne({where:{ icon:req.files?.icon2[0]?.filename ,id:{[Op.not]:req.body.partnerId}}})


    let update_data_image = await partner.findOne({ where: { id: req.body.partnerId } })
    // if(check_duplicate_icon2){
    //   req.toastr.error("Icon2 is already exist.");
    //   return res.redirect("/partner-list")
    // }

    //   if( check_duolicate_icon)
    //   {
    //    req.toastr.error("Icon1 is already exist.");
    //    return res.redirect("/partner-list")
    //   }
    let update = await partner.update({
      icon: (req.files?.icon) ? req.files.icon[0]?.filename : update_data_image.icon,
      // icon1: (req.files?.icon2) ? req.files.icon2[0]?.filename : update_data_image.icon1,
      link: null
    }, { where: { id: req.body.partnerId } }).then((data) => {

      req.toastr.success("Partner is successfully updated.");


      return res.redirect("/partner-list")
    }).catch((data) => {
      req.toastr.error("Partner is not updated. =" + data);


      res.redirect("/partner-list")
    })
  }
  catch (error) {
    console.log("update =========", error.message)
    req.toastr.error("Partner is not updated.");

    res.redirect("/partner-list")
  }
}