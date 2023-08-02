const career=require("../../models").career_info
const career_main_titledesc=require("../../models").career_main_titledesc

const { Op } = require("sequelize");


//career list
exports.careerList=async(req,res)=>{
  let career_main_title=await  career_main_titledesc.findAll({})
    career.findAll({
      order: [
        ['id', 'DESC'],
      
    ]
    })
    .then((list)=>{
    res.render("about_us/career/list",{
        title:"Career",
        userdetials:req.session.user,
        list:list,
        career_main_title:career_main_title})

    })
}

