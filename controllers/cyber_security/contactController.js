const contact = require("../../models").contact
const { Op } = require("sequelize");
const validator = require('validator');

exports.updateContact = async (req, res) => {
   await contact.findOne({})
      .then((update_contact) => {
         console.log(" udpate contact:===", update_contact);
         res.render("cyber_security/contact/update", { title: "Setting", userdetials: req.session.user, update_contact: update_contact })

      })
      .catch((error) => {

      })
}

exports.updateStore = async (req, res) => {
   let check_duplicate = await contact.findOne({})
   let phoneS
   if (check_duplicate) {
      let checkDuplicateEmail = await contact.findOne({ where: { email: req.body.email.trim(), id: { [Op.not]: req.body.contactId } } })
      if (checkDuplicateEmail) {
         req.toastr.error("Email already exist.");
         return res.redirect("/update-setting")
      }
      let checkDuplicatePhone = await contact.findOne({ where: { phone: req.body.phone.trim(), id: { [Op.not]: req.body.contactId } } })
      if (checkDuplicatePhone) {
         req.toastr.error("Phone number already exists.");
         return res.redirect("/update-setting")
      }



      //check phone number
      if (req.body.phone.trim().length != 10) {
         req.toastr.error("Phone number  must be 10 digits");
         return res.redirect("/update-setting")
      }
      else if (req.body.fax.length != 10) {

         req.toastr.error("FAX number  must be 10 digits");
         return res.redirect("/update-setting")
      }
      // else if (!req.body.facebook.endsWith(".com")) {
      //    req.toastr.error("Facebook URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }
      // else if (!req.body.instagram.endsWith(".com")) {
      //    req.toastr.error("Instagram URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }
      // else if (!req.body.linkedIn.endsWith(".com")) {
      //    req.toastr.error("LinkedIn URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }

      // else if (!req.body.twitter.endsWith(".com")) {
      //    req.toastr.error("Twitter URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }
      else {

         await contact.update({
            address: req.body.address.trim(),
            email: req.body.email.trim(),
            phone: req.body.phone.trim(),
            fax: req.body.fax,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            linkedIn: req.body.linkedIn,
            twitter: req.body.twitter,
            summary: req.body.details
         }, { where: { id: req.body.contactId } })
            .then((data) => {
               req.toastr.success("Contact is successfully updated");
               res.redirect("/update-setting")
            })
            .catch((error) => {
               req.toastr.error("Contact is not updated");
               res.redirect("/update-setting")
            })
      }
   }
   else {



      let checkDuplicateEmail = await contact.findOne({ where: { email: req.body.email.trim() } })

      if (checkDuplicateEmail) {
         req.toastr.error("Email already exists.");
         return res.redirect("/update-setting")
      }

      //check duplicate phone number 
      let checkDuplicatePhone = await contact.findOne({ where: { phone: req.body.phone } })
      if (checkDuplicatePhone) {
         req.toastr.error("Phone Number already exists.");
         return res.redirect("/update-setting")
      }

      if (req.body.phone.length != 10) {
         req.toastr.error("Phone number must be 10 digits.");
      }
      else if (req.body.fax.length != 10) {

         req.toastr.error("FAX number must be 10 digits");
         return res.redirect("/update-setting")
      }
      // else if (!req.body.facebook.endsWith(".com")) {
      //    req.toastr.error("Facebook URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }
      // else if (!req.body.instagram.endsWith(".com")) {
      //    req.toastr.error("Instagram URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }
      // else if (!req.body.linkedIn.endsWith(".com")) {
      //    req.toastr.error("LinkedIn URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }

      // else if (!req.body.twitter.endsWith(".com")) {
      //    req.toastr.error("Twitter URL must end with '.com'");
      //    return res.redirect("/update-setting")
      // }
      else {
         contact.create({
            address: req.body.address,
            email: req.body.email.trim(),
            phone: req.body.phone,
            fax: req.body.fax,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            linkedIn: req.body.linkedIn,
            twitter: req.body.twitter,
            summary: req.body.details
         })
            .then((data) => {
               req.toastr.success("Contact is successfully added.");
               res.redirect("/update-setting")

            })
            .catch((error) => {
               console.log("then catch ===", error)
               req.toastr.success("Contact is not added.");
               res.redirect("/update-setting")
            })


      }
   }
}