const contact_us=require("../../models").contact_us
exports.contactUsList=(req,res)=>{
    contact_us.findAll({
        order: [
            ['id', 'DESC'],
          
        ]
    })
    .then((list)=>{
    res.render("cyber_security/contact_us/list",{title:"Contact Us",userdetials:req.session.user,list:list})

    })
}   