const operation = require("../../models").operation
const operation_main_titledesc = require("../../models").operation_main_titledesc

const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')

exports.getOperation = (req, res) => {
    res.render("cyber_security/operation/add", {title:"Typical Attacks  ", userdetials: req.session.user })
}


// exports.ourApproachStore=(req,res)=>{
//     res.render("cyber_security/innovative/add",{title:"Banner Content",userdetials:req.session.user})
// }


exports.operationStore = async (req, res) => {

    let checkDuplicateBanner = await operation.findOne({ where: { title: req.body.title.trim() } })
    if (checkDuplicateBanner) {
        req.toastr.error("title is already exist.");
      
        return res.redirect("/typical-attacks-list")

    }


    let data = await operation.create({
        title: req.body.title.trim(),
    })
    req.toastr.success("Typical Attacks  successfully added.");
  
    res.redirect("/typical-attacks-list")
}


exports.operationList =async (req, res) => {
    operation_title = await operation_main_titledesc.findOne({})
    operation.findAll({})
        .then((data) => {
            res.render("cyber_security/operation/list", {title:"Typical Attacks  ", userdetials: req.session.user, list: data ,operation_title:operation_title})
        })
}

exports.deleteOperation = (req, res) => {
    operation.destroy({ where: { id: req.query.id } })
        .then((data) => {
            req.toastr.success("Typical Attacks  successfully deleted.");
            res.redirect("/typical-attacks-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/typical-attacks-list")
        })
}

exports.updatePage = (req, res) => {

    operation.findOne({ where: { id: req.query.id } })
        .then((data) => {
            res.render("cyber_security/operation/update", {title:"Typical Attacks  ", userdetials: req.session.user, data: data })
        })
}



exports.operationUpdateStore = async (req, res) => {

    let check_title = await operation.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })

    if (check_title) {
        req.toastr.error("Title is already exist.");
        return res.redirect("/typical-attacks-list")
    }

    operation.update({
        title: req.body.title.trim(),
    }, { where: { id: req.body.id } })
        .then((data) => {
            req.toastr.success("Typical Attacks  sucessfully updated.");
            res.redirect("/typical-attacks-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/typical-attacks-list")
        })
}




//main title and description
exports.titleAndDescriptionUpdateStore = async (req, res) => {
 
    try {
        if(req.body.id)
        {
            let checkDuplicate = await operation_main_titledesc.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
            if (checkDuplicate) {
                req.toastr.error("type is already exist");
                return res.redirect("/typical-attacks-list")
            }
            let update = await operation_main_titledesc.update({
                title: req.body.title.trim(),
                description: req.body.description
            }, { where: { id: req.body.id } })
    
            if (update) {
                req.toastr.success("Typical Attacks   main title and description is successfully updated");
                res.redirect("/typical-attacks-list")
            } 
        }
        else{
            let checkDuplicate = await operation_main_titledesc.findOne({ where: { title: req.body.title.trim() } })
            if (checkDuplicate) {
                req.toastr.error("Typical Attacks main title and description already exists.");
                return res.render("main_title_and_des/operation_main_title_desc/add", { title:"Typical Attacks   Main Title And Description", userdetials: req.session.user })
    
            }
            let data = await operation_main_titledesc.create({
                title: req.body.title.trim(),
                description: req.body.description
            })
    
            req.toastr.success("Typical Attacks main title and description is successfully added.");
            res.redirect("/typical-attacks-list")
        }
       
    }
    catch (error) {
        let banner_content = await operation_main_titledesc.findOne({ where: { id: req.body.id } })
        req.toastr.error("Typical Attacks main title and description is not updated");
        res.render("main_title_and_des/operation_main_title_desc/update", { title:"Typical Attacks   Main Title And Description", userdetials: req.session.user, banner_content: banner_content })


    }
}