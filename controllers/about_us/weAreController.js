const we_are = require("../../models").we_are

const about_us = require("../../models").about_us


const path = require("path")
const fs = require('fs');





exports.updateWeAre = async (req, res) => {
   
    await about_us.findOne({})
        .then((data) => {
            res.render("about_us/we_are/update", {
                title:"About Us",
                userdetials: req.session.user,
                data: data,
               
            })

        })
        .catch((error) => {
            req.toastr.error(" ' Who we are ' is not found")
            res.redirect("/update-about-us")
        })
}

//update we are data

exports.UpdateWeAreStore = async (req, res) => {

   

    let about = await about_us.findOne({})


    if (about) {
        about.update({
            who_image: (req.files?.who_image) ? req.files?.who_image[0]?.filename :about.who_image,
            who_description: req.body.who_description,
            mission_description: req.body.m_description,
            vision_description: req.body.v_description,
            v_m_image:(req.files?.v_m_image) ? req.files?.v_m_image[0]?.filename :about.v_m_image,
            v_m_title: req.body.v_m_title,
            v_m_description: req.body.v_m_description
        }, { where: { id: about.id } })
            .then((data) => {
                req.toastr.success(" about is updated")
                res.redirect("/update-about-us")
            })
            .catch((error) => {
                req.toastr.success(" about is not updated")
                res.redirect("/update-about-us")
            })
      
    }
    else {
        about_us.create({
            who_image: req.files?.who_image[0]?.filename ,
            who_description: req.body.who_description,
            mission_description: req.body.m_description,
            vision_description: req.body.v_description,
            v_m_image: req.files?.v_m_image[0]?.filename ,
            v_m_title: req.body.v_m_title,
            v_m_description: req.body.v_m_description
        })
            .then((data) => {
                req.toastr.success("about is added")
                // res.render("about_us/we_are/update", {
                //     title:"About Us",
                //     userdetials: req.session.user,
                //     data: data,
                   
                // })
                res.redirect("/update-about-us")
            })
            .catch((error) => {
                req.toastr.success("about is not added")
                res.redirect("/update-about-us")
            })
     

    }


    // if(check_mission)
    // {
    //     our_mission.update({
    //        description:mission_description
    //     },{where:{id:check_mission.id}})
    //     .then((data)=>{
    //         req.toastr.success(" ' mission ' is updated")
    //     })
    //     .catch((error)=>{
    //         req.toastr.success(" ' mission ' is not updated")
    //     })
    //     res.redirect("/update-about-us")
    // }
    // else{
    //     our_mission.create({
    //         description:mission_description 
    //     })
    //     .then((data)=>{
    //         req.toastr.success(" ' mission ' is added")
    //     })
    //     .catch((error)=>{
    //         req.toastr.success(" ' mission ' is not added")
    //     })
    //     res.redirect("/update-about-us")
    // }




}