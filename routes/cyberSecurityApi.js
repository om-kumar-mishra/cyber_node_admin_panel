const express=require("express")
const upload=require("../utils/multer_providetr")
const ApiController=require("../controllers/api/apiController")
const aboutUsController=require("../controllers/api/aboutUsApiController")

//const bann=require("../controllers/cyber_security/bannnerContentController")
const ApiRoute=express.Router()


// api of home page start
ApiRoute.get("/banner",ApiController.getlistOfBanner)
ApiRoute.get("/banner-content",ApiController.getlistOfBannerContent)
ApiRoute.get("/main-service",ApiController.mainServiceList)
ApiRoute.get("/single-main-service",ApiController.singleMainServiceList)
ApiRoute.get("/testimonial",ApiController.testimonial)
ApiRoute.get("/contacts",ApiController.contacts)
ApiRoute.get("/blogs",ApiController.blogsList)
ApiRoute.get("/partners",ApiController.partnerList)
ApiRoute.get("/security-service",ApiController.securityServiceList)
ApiRoute.post("/news-letter",ApiController.newsLetter)
ApiRoute.get("/faq",ApiController.faqList)
ApiRoute.get("/slug",ApiController.slugList)
ApiRoute.post("/contact-us",ApiController.contactUs)
ApiRoute.post("/faq-contact",ApiController.faqContact)
ApiRoute.get("/operation",ApiController.getOperationList)
ApiRoute.get("/innovation",ApiController.getInnovativeList)
ApiRoute.get("/most-complete",ApiController.getMostCompleteList)
ApiRoute.get("/our-approach",ApiController.getOurApproachList)


// api of home page end

//about us start
ApiRoute.get("/we-are",aboutUsController.weAreList)
ApiRoute.get("/our-vision",aboutUsController.ourVision)
ApiRoute.get("/our-mission",aboutUsController.ourMission)
// ApiRoute.get("/career",aboutUsController.careerList)
ApiRoute.get("/career",aboutUsController.careerList)
ApiRoute.get("/why-we",aboutUsController.WhyWeList)
ApiRoute.get("/why-we-count",aboutUsController.WhyWeCounttList)

//about us end



ApiRoute.get("/industry",ApiController.industry)
ApiRoute.post("/career",upload.single("image"),ApiController.career)

ApiRoute.get("/comman-banner",ApiController.commanBanner)




//-------------------------------------------------main title and description------------------------------------------------------
ApiRoute.get("/security-service-main-title-desc",ApiController.securityServiceMainTitle)
ApiRoute.get("/main-service-main-title-desc",ApiController.MainServiceMainTitle)
ApiRoute.get("/case-studies-main-title-desc",ApiController.caseStudiesMainTitle)
ApiRoute.get("/our-approach-main-title-desc",ApiController.ourApproach)
ApiRoute.get("/industry-main-title-desc",ApiController.industryMainTitle)
ApiRoute.get("/our-advisory-main-title-desc",ApiController.ourAdvisory)
ApiRoute.get("/typical-attacks-main-title-desc",ApiController.typicalAttacks)
ApiRoute.get("/dimensions-info-techno-main-title-desc",ApiController.dimensionsInfoTechno)
ApiRoute.get("/about-us",ApiController.aboutUs)










module.exports=ApiRoute