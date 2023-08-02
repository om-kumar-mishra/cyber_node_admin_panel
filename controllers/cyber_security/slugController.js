const slug = require("../../models").slug
const { Op } = require("sequelize");

exports.slug = (req, res) => {
  res.render("cyber_security/slug/add", { title: "CMS", userdetials: req.session.user })

}






exports.slugStore = async(req, res) => {
 try{

 
 let check_data= await slug.findOne({where:{title:req.body.title.trim()}})
  console.log("=======",req.body)
  console.log(req.body.title)
  console.log("check_data===",check_data)

  
  if (check_data) {
    req.toastr.error("Title is already exist.");
    // req.flash("error","already exist")
    return res.redirect("/slug")
  }
 }
 catch(error)
 {
     console.log("Error===",error.message)

 }
 //create slug
    let  t=req.body.title
 // let slugName = t.replaceAll(" ", "_")

  // ✔️ Use replace with a regex
//let slugName= t.replace(/" "/g, "_")// ✔️ Use replace with a regex
const regex = /" "/g;
let slugName=t.replace(/\W+/g, '_');
  console.log("slugName====",slugName)
  //  console.log("slug=====",slugName)

  await slug.create({
    title: req.body.title,
    description: req.body.description,
    slugName: slugName
  })
    .then((data) => {
      req.toastr.success("CMS is successfully added.");

      // req.flash("success","successful added")
      res.redirect("/slug-list")
    })
    .catch((error) => {
      req.toastr.error("CMS is not added.");

      //req.flash("error","your slug is not added")
      return res.redirect("/slug-list")
    })
}







exports.slugList = async (req, res) => {
  await slug.findAll({})
    .then((list) => {
      res.render("cyber_security/slug/list", { title: "CMS", userdetials: req.session.user, list: list })
    })
}

exports.deleteSlug = async (req, res) => {
  console.log("req.query.slugName ========",req.query.slugName )
  await slug.destroy({ where: { slugName: req.query.slugName } })
    .then((data) => {
      req.toastr.success("CMS is successfully deleted.");
      return res.redirect("/slug-list")
    })
}

exports.updateSlug = async (req, res) => {
  await slug.findOne({ where: { slugName: req.query.slugName } })
    .then((data) => {
      res.render("cyber_security/slug/update", { title: "CMS", userdetials: req.session.user, data: data })

    })
}


exports.updateSlugStore = async (req, res) => {
  let check_data = await slug.findOne({ where: { title: req.body.title.trim(), id: { [Op.not]: req.body.slugId } } })
  if (check_data) {
    req.toastr.error("Title is already exist.");
    return res.redirect("/slug-list")
  }


  await slug.update({
    title: req.body.title.trim(),
    description: req.body.description
  }, { where: { id: req.body.slugId } })
    .then((data) => {
      req.toastr.success("CMS is successfully updated.");

      //   req.flash("success","successful update")
      return res.redirect("/slug-list")
    })
}