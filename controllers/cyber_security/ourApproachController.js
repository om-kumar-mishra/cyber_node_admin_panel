const our_approach = require("../../models").our_approach
const our_approach_main_titledesc = require("../../models").our_approach_main_titledesc

const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')
exports.getOurApproach = (req, res) => {
    res.render("cyber_security/our_approach/add", { title: "Our Approach", userdetials: req.session.user })
}


// exports.ourApproachStore=(req,res)=>{
//     res.render("cyber_security/our_approach/add",{title:"Banner Content",userdetials:req.session.user})
// }


exports.ourApproachStore = async (req, res) => {

    let checkDuplicateBanner = await our_approach.findOne({ where: { title: req.body.approach_title.trim() } })
    if (checkDuplicateBanner) {
        req.toastr.error("title is already exist.");
        // req.flash('error',"banner is already exist") 
        return res.redirect("/our_approach")

    }


    let data = await our_approach.create({
        title: req.body.approach_title.trim(),
        description: req.body.description,
        icon: req.file.filename
    })
    req.toastr.success("Our Approach is successfully added.");
    // req.flash('success',"successful add")
    res.redirect("/approach-list")
}


exports.approachList = async (req, res) => {
    let banner_content = await our_approach_main_titledesc.findOne({})
    our_approach.findAll({})
        .then((data) => {
            res.render("cyber_security/our_approach/list", {
                title: "Our Approach",
                userdetials: req.session.user,
                list: data,
                banner_content: banner_content
            })
        })
}

exports.deleteApproach = (req, res) => {
    our_approach.destroy({ where: { id: req.query.ourApproachId } })
        .then((data) => {
            req.toastr.success("Our Approach is successfully deleted.");
            res.redirect("/approach-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/approach-list")
        })
}

exports.updatePage = (req, res) => {

    our_approach.findOne({ where: { id: req.query.ourApproachId } })
        .then((data) => {
            res.render("cyber_security/our_approach/update", { title: "Our Approach", userdetials: req.session.user, data: data })
        })
}

exports.ourApproachUpdateStore = async (req, res) => {

    let getoldImage = await our_approach.findOne({ where: { id: req.body.approach_id } })
    let check_title = await our_approach.findOne({ where: { title: req.body.approach_title.trim(), id: { [Op.not]: req.body.approach_id } } })
    //let updateBannerImage=  await our_approach.findOne({where:{id:req.body.approach_id}})

  


    if (check_title) {
        req.toastr.error("Title is already exist.");
        //req.flash('error',"title already exist")
        return res.redirect("/approach-list")
    }
    our_approach.update({
        title: req.body.approach_title.trim(),
        description: req.body.description,
        icon: (req.file) ? req.file.filename : getoldImage.icon
    }, { where: { id: req.body.approach_id } })
        .then((data) => {
            req.toastr.success("Our Approach is sucessfully updated.");
            res.redirect("/approach-list")
        })
        .catch((error) => {
            req.toastr.error("Something unexpected happend.");
            res.redirect("/approach-list")
        })
}




//main title


exports.titleAndDescriptionUpdateStore = async (req, res) => {

    console.log("fyuefyefyuefgwyetfweefegfywefgewyyftguwfywftfye================================================",req.body)

    try {
        if (req.body.id) {
            let checkDuplicate = await our_approach_main_titledesc.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.id } } })
            if (checkDuplicate) {
                req.toastr.error("type is already exist");
                return res.redirect("/approach-list")
            }
            let update = await our_approach_main_titledesc.update({
                title: req.body.title.trim(),
                description: req.body.description
            }, { where: { id: req.body.id } })

            if (update) {
                req.toastr.success("Our approach  main title and descriptionis successfully updated");
                res.redirect("/approach-list")
            }
        }
        else {
            let checkDuplicate = await our_approach_main_titledesc.findOne({ where: { title: req.body.title.trim() } })
            if (checkDuplicate) {
                req.toastr.error("Our approach  main title and descriptionis already exist.");
                return res.render("main_title_and_des/our_approach_main_title_desc/add", { title: "Our Approach Main Title", userdetials: req.session.user })

            }
            let data = await our_approach_main_titledesc.create({
                title: req.body.title.trim(),
                description: req.body.description
            })

            req.toastr.success("Our approach  main title and descriptionis successfully added.");
            res.redirect("/approach-list")
        }
    }
    catch (error) {
        req.toastr.error("Our approach  main title and descriptionis not added");
        return res.render("main_title_and_des/our_approach_main_title_desc/add", { title: "Our Approach Main Title", userdetials: req.session.user })
    }

}
