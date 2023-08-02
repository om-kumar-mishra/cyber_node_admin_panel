const express=require("express")
const upload=require("../utils/multer_providetr")
const checklogin=require("../middleware/auth")
const weAreController=require("../controllers/about_us/weAreController")
// const ourVisionController=require("../controllers/about_us/ourVisionController")
// const ourMissionController=require("../controllers/about_us/ourMissionController")
const careerController=require("../controllers/about_us/careerController")


const aboutUs=express.Router()

//who we are start
// aboutUs.get("/we-are",checklogin,weAreController.weAre)
// aboutUs.post("/we-are-store",checklogin,upload.single("image"),weAreController.weAreStore)
// aboutUs.get("/we-are-list",checklogin,weAreController.weAreList)
// aboutUs.get("/delete-we-are",checklogin,weAreController.weAreDelete)
aboutUs.get("/update-about-us",checklogin,weAreController.updateWeAre)
const imageupload = upload.fields([{ name: 'who_image', maxCount: 1 }, { name: 'v_m_image', maxCount: 8 }])
aboutUs.post("/update-about-us-store",checklogin,imageupload,weAreController.UpdateWeAreStore)


//who we are en



// //our vision start
// aboutUs.get("/our-vision",checklogin,ourVisionController.ourVision)
// aboutUs.post("/our-vision-store",checklogin,ourVisionController.ourVisionStore)
// aboutUs.get("/our-vision-list",checklogin,ourVisionController.ourVisionList)
// aboutUs.get("/delete-our-vision",checklogin,ourVisionController.ourVisiondelete)
// aboutUs.get("/update-our-vision",checklogin,ourVisionController.UpdateOurVision)
// aboutUs.post("/update-our-vision-store",checklogin,ourVisionController.UpdateOurVisionStore)

// our vision end

//  Our mission start
// aboutUs.get("/our-mission",checklogin,ourMissionController.ourMission)
// aboutUs.post("/our-mission-store",checklogin,ourMissionController.ourMissionStore)
// aboutUs.get("/our-mission-list",checklogin,ourMissionController.ourMissionList)
// aboutUs.get("/delete-our-mission",checklogin,ourMissionController.deleteOurMission)
// aboutUs.get("/update-our-mission",checklogin,ourMissionController.updateOurMission)
// aboutUs.post("/update-our-mission-store",checklogin,ourMissionController.updateOurMissionStore)



// Our mission end

//career start
 //aboutUs.get("/career",checklogin,careerController.career)
// aboutUs.post("/career-store",checklogin,careerController.careerStore)
 aboutUs.get("/career-list",checklogin,careerController.careerList)
 //aboutUs.get("/delete-career",checklogin,careerController.deleteCareer)
 //aboutUs.get("/update-carrer",checklogin,careerController.updateCareer)
 //aboutUs.post("/update-career-store",checklogin,careerController.updateCareerStore)
 
 
 
//career end
module.exports=aboutUs