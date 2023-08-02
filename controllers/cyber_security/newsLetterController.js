const news_letter= require("../../models").news_letter


exports.newsLetters=async(req,res)=>{
 await  news_letter.findAll({ order: [
   ['id', 'DESC'],
 
]})
   .then((data)=>{
    res.render("cyber_security/news-letter/list",{title:"News letter",userdetials:req.session.user,data:data})
      
   }) 
   .catch((error)=>{
    
   })

}

exports.deleteNewsLetters=(req,res)=>{

   news_letter.destroy({where:{id:req.query.newsLetterId}})
   .then((data)=>{
     req.flash("success","successful deleted")
      res.redirect("/news-letters")
   })
   .catch((error)=>{
      req.flash("success","news letter is not deleted")
      res.redirect("/news-letters")
   })
}