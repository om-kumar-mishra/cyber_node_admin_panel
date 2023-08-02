const testimonial = require("../../models").testimonial
const testimonial_main_titledesc = require("../../models").testimonial_main_titledesc

const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')
exports.getAddTestimonialPage = (req, res) => {
  res.render("cyber_security/testimonial/add", { title: "Our Advisory Board", userdetials: req.session.user })

}


exports.postTestimonial = async (req, res) => {
  try {
    let check_duplicate = await testimonial.findOne({ where: { Name: req.body.name.trim() } })
    if (check_duplicate) {
      req.toastr.error(" Name is already exist.");
      return res.redirect("/add-our-advisory-board")
    }

    await testimonial.create({
      Name: req.body.name.trim(),
      image: req.file.filename,
      message: req.body.message,
      designation: req.body.designation
    }).then((data) => {

      req.toastr.success("Our Advisory Board  is successfully added.");

      // req.flash('success',"Successful added") 
      res.redirect("/our-advisory-board-list")

    }).catch((error) => {

      req.toastr.success("Our Advisory Board  is not added.");
      // req.flash('error',"faild") 
      res.redirect("/our-advisory-board-list")
    })

  }
  catch (error) {
    req.toastr.success("Our Advisory Board  is not added.");

    //req.flash('error',"faild") 
    res.redirect("/our-advisory-board-list")
  }
}


//get Our Advisory Board  list

exports.getTestimonialList = async (req, res) => {
  let main_title = await testimonial_main_titledesc.findOne({})
  try {
    await testimonial.findAll({})
      .then((testimonial_list) => {
        res.render("cyber_security/testimonial/list", {
          title: "Our Advisory Board",
          userdetials: req.session.user,
          testimonial_list: testimonial_list,
          main_title: main_title
        })

      })
      .catch((error) => {
        req.toastr.error("Our Advisory Boardfound.");

        //req.flash('error',"not found") 
        res.redirect("/our-advisory-board-list")
      })
  } catch (error) {
    req.toastr.error("Our Advisory Boardfound.");

    //  req.flash('error',"not found") 
    res.redirect("/our-advisory-board-list")
  }
}


//delete
exports.deleteTestimonial = async (req, res) => {
  try {
    console.log("id===", req.query.testimonialId)
    await testimonial.destroy({ where: { id: req.query.id } })
      .then((data) => {
        req.toastr.success("Our Advisory Boardis successfully deleted.");

        //    req.flash('success',"Successful deleted") 
        res.redirect("/our-advisory-board-list")
      })
      .catch((error) => {
        req.toastr.success("Our Advisory Boardis not deleted.");

        // req.flash('error',"faild") 
        res.redirect("/our-advisory-board-list")
      })
  }
  catch (error) {
    req.toastr.success("Our Advisory Boardis not deleted.");

    //  req.flash('error',"faild ") 
    res.redirect("/our-advisory-board-list")
  }
}

//get update page
exports.getUpdateTestimonialPage = async (req, res) => {
  try {


    await testimonial.findOne({ where: { id: req.query.id } })
      .then((update_testimonial) => {
        res.render("cyber_security/testimonial/update", { title: "Our Advisory Board", userdetials: req.session.user, update_testimonial: update_testimonial })

      })
      .catch((error) => {
        req.toastr.error("Our Advisory Board  is not found.");

        // req.flash('error',"not found ") 
        res.redirect("/our-advisory-board-list")
      })
  }
  catch (error) {
    req.toastr.error("Our Advisory Board  is not found.");

    // req.flash('error',"not found ") 
    res.redirect("/our-advisory-board-list")
  }
}


//update testimonial
exports.updateTestimonial = async (req, res) => {

  try {

    let check_duplicate = await testimonial.findOne({ where: { Name: req.body.name.trim(), id: { [Op.not]: req.body.id } } })
    console.log("check_duplicate  ===", check_duplicate)

    if (check_duplicate) {
      req.toastr.error("Title is already exist.");

      // req.flash('error',"already exist ") 
      return res.redirect("/our-advisory-board-list")
    }

    await testimonial.update({
      Name: req.body.name.trim(),
      image: (req.file) ? req.file.filename : req.body.oldImage,
      message: req.body.message,
      designation: req.body.designation
    }, { where: { id: req.body.id } })
      .then((data) => {
        req.toastr.success("Our Advisory Board  is successfully updated.");
        res.redirect("/our-advisory-board-list")
      })
      .catch((error) => {
        req.toastr.success("Our Advisory Board  is successfully updated.");
        res.redirect("/our-advisory-board-list")
      })
  }
  catch (error) {
    req.toastr.error("Our Advisory Board  is not updated.");
    res.redirect("/our-advisory-board-list")
  }
}


//Main title and Descriptiom
exports.titleAndDescriptionUpdateStore = async (req, res) => {



  try {

    if (req.body.id) {
      let checkDuplicate = await testimonial_main_titledesc.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
      if (checkDuplicate) {
        req.toastr.error("type is already exist");
        return res.redirect("/our-advisory-board-list")
      }
      let update = await testimonial_main_titledesc.update({
        title: req.body.title.trim(),
        description: req.body.description
      }, { where: { id: req.body.id } })

      if (update) {
        req.toastr.success("Our Advisory Board  main title and descriptionis successfully updated");
        res.redirect("/our-advisory-board-list")
      }
    }
    else {
      let checkDuplicate = await testimonial_main_titledesc.findOne({ where: { title: req.body.title.trim() } })
      if (checkDuplicate) {
        req.toastr.error("Our Advisory Board  main title and descriptionis already exist.");
        return res.render("main_title_and_des/testimonial_main_title_desc/add", { title: "Testimonial  Main Title And Description", userdetials: req.session.user })

      }
      let data = await testimonial_main_titledesc.create({
        title: req.body.title.trim(),
        description: req.body.description
      })

      req.toastr.success("Our Advisory Board  main title and descriptionis successfully added.");
      res.redirect("/our-advisory-board-list")
    }

  }
  catch (error) {
    let banner_content = await testimonial_main_titledesc.findOne({ where: { id: req.body.id } })
    req.toastr.error("Testimonial  main title and descriptionis not updated");
    res.render("main_title_and_des/testimonial_main_title_desc/update", { title: "Our Advisory Board  Main Title And Description", userdetials: req.session.user, banner_content: banner_content })


  }
}
