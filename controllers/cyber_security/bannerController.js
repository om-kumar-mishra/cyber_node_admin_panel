const Banner = require("../../models").banner
const { Op } = require("sequelize");
const path = require("path")
const fs = require('fs')


exports.updateBanner = async (req, res) => {

    let updateBanner = await Banner.findOne({})
    res.render("cyber_security/banner/update", { title: "Banner", userdetials: req.session.user, updateBanner: updateBanner })

}




exports.updateBannerById = async (req, res) => {
    // console.log("req.file===========",req.file)
    if (req.body.b_Id) {
        let updateBanner = await Banner.findOne({ where: { title: req.body.bannerTitle, id: { [Op.not]: req.body.b_Id } } })
        let updateBannerImage = await Banner.findOne({ where: { id: req.body.b_Id } })
        if (updateBanner) {
            req.toastr.error("Title is already exist.");
            return res.redirect("/update-banner")
        }

        await Banner.update({
            image: (req.file) ? req.file.filename : updateBannerImage.image,
            title: req.body.bannerTitle,
            sub_title: req.body.bannerSubTitle,
            details: req.body.details
        }, { where: { id: req.body.b_Id } }).then((data) => {

            req.toastr.success("Banner is successfully updated.");
            res.redirect("/update-banner")
        }).catch((data) => {
            req.toastr.error("Banner is not updated.");
            res.render("cyber_security/banner/update", { title: "Banner", userdetials: req.session.user, updateBanner: updateBanner, errorMessage: "banner is not updated" })
        })
    }
    else {

        let checkDuplicateBanner = await Banner.findOne({ where: { title: req.body.bannerTitle.trim() } })
        if (checkDuplicateBanner) {
            req.toastr.error("Banner is already exist.");
            return res.redirect("/update-banner")
    
        }
        let data = await Banner.create({
            image: req.file.filename,
            title: req.body.bannerTitle.trim(),
            sub_title: req.body.bannerSubTitle,
            details: req.body.details
        })
        req.toastr.success("Banner is successfully added.");
        // req.flash('success',"successful add")
        res.redirect("/update-banner")

    }


}