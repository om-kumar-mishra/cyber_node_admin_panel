const industry_details = require("../../models").industry_details
const industry_main_titledesc = require("../../models").industry_main_titledesc

const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

// get add page
exports.getIndustryDetailsPage = (req, res) => {
  res.render("industry/industry/add", { title: "Industry Details", userdetials: req.session.user })

}




//Industry Details add
exports.industryStore = async (req, res) => {


  try {
    let checkDuplicate = await industry_details.findOne({ where: { title: req.body.title.trim() } })
    console.log("checkDuplicate ====", checkDuplicate)
    if (checkDuplicate) {
      req.toastr.error("Title is already exist.");
      res.redirect("/industry-details")
    }
    else {
      let data = await industry_details.create({
        icon: req.files?.icon[0]?.filename,
        title: req.body.title.trim(),
        description: req.body.description,
        sub_title: req.body.sub_title,
        image: req.files?.image[0]?.filename,
       // description2: req.body.description2,
        //image2: DataTypes.STRING

      })
      req.toastr.success("Industry Details is successfully added.");
      res.redirect("/industry-details-list")
    }


  }
  catch (error) {
    console.log("error====", error)
    req.toastr.error("Something unexpected happened");
    res.redirect("/industry-details-list")
    // res.render("industry/industry/add", { title: "Industry Details", userdetials: req.session.user })

  }
}



// show list of security serviceg
exports.industryList = async (req, res) => {
  let industry_main_title = await industry_main_titledesc.findOne({})

  await industry_details.findAll({})
    .then((list) => {
      res.render("industry/industry/list",
        {
          title: "Industry Details",
          userdetials: req.session.user, list: list,
          industry_main_title: industry_main_title
        })
    })
}


//delete security service

exports.industryDelete = async (req, res) => {
  try {
    await industry_details.destroy({ where: { id: req.query.securityServiceId } }).then((data) => {
      req.toastr.success("Industry Details is successfully deleted.");
      res.redirect("/industry-details-list")
    }).catch((data) => {
      req.toastr.error("Industry Details is not deleted.")
      res.redirect("/industry-details-list")
    })
  }
  catch (error) {
    req.toastr.error("Industry Details is not deleted.");
    res.redirect("/industry-details-list")
  }
}


//get update page
exports.getUpdatePage = async (req, res) => {
  try {
    await industry_details.findOne({ where: { id: req.query.securityServiceId } })
      .then((update_data) => {
        res.render("industry/industry/update", { title: "Industry Details", userdetials: req.session.user, update_data: update_data })

      })
      .catch((error) => {
        res.redirect("/industry-details-list")
      })

  }
  catch (error) {

    res.redirect("/industry-details-list")
  }
}


//update security
exports.industryUpdateStore = async (req, res) => {

  try {

    let duplicate = await industry_details.findOne({ where: { title: req.body.title, id: { [Op.not]: req.body.securityServiceId } } })
    let oldData = await industry_details.findOne({ where: { id: req.body.securityServiceId } })
    if (duplicate) {
      console.log(duplicate)
      req.toastr.error("Title is already exist.");
      return res.redirect("/industry-details-list")
    }
    else {

      industry_details.update({
        icon: (req.files?.icon) ? req.files?.icon[0]?.filename : oldData.icon,
        title: req.body.title,
        description: req.body.description,
        sub_title: req.body.sub_title,
        image: (req.files?.image) ? req.files?.image[0]?.filename : oldData.image,
        //description2: req.body.description2,
        //image2:
      }, { where: { id: req.body.securityServiceId } })
        .then(() => {
          req.toastr.success("Industry Details is successfully updated.");
          res.redirect("/industry-details-list")
        })
        .catch((error) => {
          res.redirect("/industry-details-list")
        })
    }


  }
  catch (error) {
    console.log("error==============", error)
    req.toastr.error("Industry Details is not updated.");
    res.redirect("/industry-details-list")
  }
}



//main title

exports.titleAndDescriptionUpdateStore = async (req, res) => {
  try {
    console.log("=========",req.body)
   let check_industry_title=await industry_main_titledesc.findOne({})
        if(check_industry_title)
        {
          industry_main_titledesc.update({
            title: req.body.title.trim(),
            description: req.body.description
          },{where:{id:check_industry_title.id}})
          .then((data)=>{
            req.toastr.error("Industry details main title is successfully updated.");
            res.redirect("/industry-details-list")
          })
          .catch((error)=>{
            req.toastr.error("Industry Details main title is not updated.");
            res.redirect("/industry-details-list")
          })
        }
        else{
          industry_main_titledesc.create({
            title: req.body.title.trim(),
            description: req.body.description
          })
          .then((data)=>{
            req.toastr.success("Industry Details main title is successfully  added.");
            res.redirect("/industry-details-list")
          })
          .catch((error)=>{
            req.toastr.error("Industry Details successfully main title is not added.");
            res.redirect("/industry-details-list")
          })

        }
  }
  catch (error) {
     
      req.toastr.error("Unexpected happened"+error.message);
      res.redirect("/industry-details-list")


  }
}