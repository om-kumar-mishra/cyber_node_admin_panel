const we_are=require("../../models").we_are
const our_vision=require("../../models").our_vision
const our_mission=require("../../models").our_mission
const career=require("../../models").career
const why_we=require("../../models").why_we
const  why_we_count=require("../../models").why_we_count



// we are list
exports.weAreList=async(req,res)=>{
    try{
        let data=await we_are.findOne({})
        res.status(200).json({ message: "all Who We Are list", code: 200, data: data })
     }
     catch(error){
        res.status(400).json({ message: "error in code", code: 400, data: error.message })
         
     }
}

//our vision list
exports.ourVision=async(req,res)=>{
   try{
      let data=await our_vision.findOne({})
      res.status(200).json({ message: "our vision list", code: 200, data: data })
   }
   catch(error){
      res.status(400).json({ message: "error in code", code: 400, data: error.message })
       
   }
}

//our mission list
exports.ourMission=async(req,res)=>{
   try{
      let data=await our_mission.findOne({})
      res.status(200).json({ message: "our vision list", code: 200, data: data })
   }
   catch(error){
      res.status(400).json({ message: "error in code", code: 400, data: error.message })
       
   }
}

//get career list

exports.careerList=async(req,res)=>{
   try{
      let data=await career.findAll({})
      res.status(200).json({ message: "career list", code: 200, data: data })
   }
   catch(error){
      res.status(400).json({ message: "error in code", code: 400, error: error.message })
       
   }
}

//get list why we

exports.WhyWeList=async(req,res)=>{
   try{
      let data=await why_we.findAll({})
      res.status(200).json({ message: "why we list", code: 200, data: data })
   }
   catch(error){
      res.status(400).json({ message: "error in code", code: 400, error: error.message })
       
   }
}

//get list 
exports.WhyWeCounttList=async(req,res)=>{
   try{
      let data=await why_we_count.findOne({})
      res.status(200).json({ message: "why we count list", code: 200, data: data })
   }
   catch(error){
      res.status(400).json({ message: "error in code", code: 400, error: error.message })
       
   }
}