const  why_we_count=require("../../models").why_we_count
exports.whyWeCount=(req,res)=>{
    res.render("cyber_security/why_we_count/add",{title:"Why We Count",userdetials:req.session.user})
}

//why we count store

exports.whyWeCountStore=async(req,res)=>{
  await  why_we_count.create({
     customers_served: req.body.customer_served,
     cybersecurity_projects:req.body.cybersecurity_project,
     customer_retention: req.body.customer_retention,
     cybersecurity_experts: req.body.cybersecurity_experts
    })
    .then((data)=>{

       req.toastr.success(" 'Why we Count' is successfully added.");      
       // req.flash("success","successful added")
        res.redirect("/why-we-count-list")
    })
}

//why we count list

exports.whyWeCountList=async(req,res)=>{
   await why_we_count.findAll({})
    .then((list)=>{
     res.render("cyber_security/why_we_count/list",{title:"Why We Count",userdetials:req.session.user,list:list})

    })
}

exports.deleteWhyWeCount=async(req,res)=>{
   await why_we_count.destroy({where:{id:req.query.whyWeCountId}})
    .then((data)=>{
       req.toastr.success(" 'Why we Count' is successfully deleted.");      

     //   req.flash("success","successful delete")
        res.redirect("/why-we-count-list")
    })
}

exports.updateWhyWeCount=(req,res)=>{
    why_we_count.findOne({where:{id:req.query.whyWeCountId}})
    .then((data)=>{
     res.render("cyber_security/why_we_count/update",{title:"Why We Count",userdetials:req.session.user,data:data})

    })
}

exports.updateWhyWeCountStore=(req,res)=>{
    why_we_count.update({
        customers_served: req.body.customer_served,
        cybersecurity_projects:req.body.cybersecurity_project,
        customer_retention: req.body.customer_retention,
        cybersecurity_experts: req.body.cybersecurity_experts
    },{where:{id:req.body.whyWeCountId}})
    .then((data)=>{
       req.toastr.success(" 'Why we Count' is successfully updated.");      

       // req.flash("success","successful update")
        res.redirect("/why-we-count-list")
    })
}