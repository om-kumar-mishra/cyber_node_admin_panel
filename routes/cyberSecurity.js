const express=require("express")
const upload=require("../utils/multer_providetr")
const bannerController=require("../controllers/cyber_security/bannerController")
const bannerContentController=require("../controllers/cyber_security/bannnerContentController")
const PartnerController=require("../controllers/cyber_security/PartnerController")
const securityServiceController=require("../controllers/cyber_security/securityServiceController")
const mainServiceController=require("../controllers/cyber_security/mainServiceController")
const testimonialController=require("../controllers/cyber_security/testimonialController")
const blogController=require("../controllers/cyber_security/blogController")
const contactController=require("../controllers/cyber_security/contactController")
const newsLetterController=require("../controllers/cyber_security/newsLetterController")
const faqController=require("../controllers/cyber_security/faqController")
const slugController=require("../controllers/cyber_security/slugController")
const whyWeController=require("../controllers/cyber_security/whyWeController")
const whyWeCountController=require("../controllers/cyber_security/whyWeCountController")
const contactUsController=require("../controllers/cyber_security/contactUsController")
const ourApproachController=require("../controllers/cyber_security/ourApproachController")
// const mostCompleteController=require("../controllers/cyber_security/most_completeController")
const dimensionsController=require("../controllers/cyber_security/dimensionsController")
const operationController=require("../controllers/cyber_security/operationController")
const commanBannerController=require("../controllers/cyber_security/commanBannerController")
const thumbnailController=require("../controllers/thumbnailController")


// const securityServiceMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/securityServiceMainTitleController")
// const mainServiceMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/mainServiceMainTitleController")
// const innovativeMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/innovativeMainTitleController")
// const ourApproachMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/ourApproachMainTitleController")
// const testimonialMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/testimonialMainTitleController")
// const operationMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/operationMainTitleController")
// const blogMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/blogMainTitleController")
// const ourVisionMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/ourVisionMainTitleController")
// const mostCompletedMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/mostCompletedMainTitleController")
// const careerMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/careerMainTitleController")
// const industryMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/industryMainTitleController")


//const ourApproachMainTitleController=require("../controllers/cyber_security/main_title_and_description_add/ourApproachMainTitleController")





const industryDetailsController=require("../controllers/industry/industryDetailsController")
const industryImagesController=require("../controllers/industry/industryImagesController")










const checklogin=require("../middleware/auth")
const app=express.Router()


//start banner

app.get("/update-banner",checklogin,bannerController.updateBanner)
app.post("/update-banner-store",checklogin,upload.single("image"),bannerController.updateBannerById)
//end banner

//banner content
app.get("/add-second-section",checklogin,bannerContentController.getBannerAddPage)
app.post("/post-second-section",checklogin,bannerContentController.postBannerContent)
app.get("/get-second-section-list",checklogin,checklogin,bannerContentController.getBannerContentList)
app.get("/delete-second-section",checklogin,bannerContentController.deleteBannerContent)
app.get("/update-second-section",checklogin,checklogin,bannerContentController.getUpdateBannerContentPage)
app.post("/update-second-section-store",checklogin,bannerContentController.UpdateBannerContentPage)
//end banner content



//start comman  banner
app.get("/add-comman-banner",checklogin,commanBannerController.addBanner)
app.post("/post-comman-banner",checklogin,upload.single("image"),commanBannerController.PostBanner)
app.get("/get-comman-banner-list",checklogin,commanBannerController.bannerList)
app.get("/delete-comman-banner",checklogin,commanBannerController.deleteBanner)
app.get("/update-comman-banner",checklogin,commanBannerController.updateBanner)
app.post("/update-comman-banner-store",checklogin,upload.single("image"),commanBannerController.updateBannerById)
//end comman banner








//partner start
 app.get("/add-partner",checklogin,PartnerController.getAddPartnerPage)
 const cpUpload = upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'icon2', maxCount: 8 }])
 app.post("/post-partner",checklogin,cpUpload,PartnerController.postPartner)
 app.get("/partner-list",checklogin,PartnerController.getPartnerList)
 app.get("/delete-partner",checklogin,PartnerController.deletePartnerIcon)
 app.get("/partner-update",checklogin,PartnerController.getPartnerUpdatePage)
 const cpUpload1 = upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'icon2', maxCount: 8 }])
 app.post("/update-partner-store",checklogin,cpUpload1,PartnerController.updatePartner) 
//partner end




//security service start
app.get("/add-security-service",checklogin,securityServiceController.getSecurityServicePage)
app.post("/post-security-service",checklogin,upload.single("icon"),securityServiceController.postSecurityServicePage)
app.get("/security-service",checklogin,securityServiceController.getSecurityServiceList)
app.get("/delete-security-service",checklogin,securityServiceController.deleteSecurityService)
app.get("/update-security-service",checklogin,securityServiceController.getUpdateSecurityServicePage)
app.post("/post-update-security-service",checklogin,upload.single("icon"),securityServiceController.updateSecurityService)
// security service end




//main service
const mainServiceImage = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image2', maxCount: 1 }])

app.get("/add-main-service",checklogin,mainServiceController.getAddMainServicePage)
app.post("/post-main-service",checklogin,mainServiceImage,mainServiceController.postMainService)
app.get("/main-service-list",checklogin,mainServiceController.getMainServiceList)
app.get("/delete-main-service",checklogin,mainServiceController.deleteMainService)
app.get("/update-main-service",checklogin,mainServiceController.getUpdateMainServicePage)
app.post("/update-main-service-store",checklogin,mainServiceImage,mainServiceController.updateMainService)
app.post("/main-service-main-title-update-store",checklogin,mainServiceController.titleAndDescriptionUpdateStore)

//main service end


//testimonial start
app.get("/add-our-advisory-board",checklogin,testimonialController.getAddTestimonialPage)
app.post("/post-our-advisory-board",checklogin,upload.single("image"),testimonialController.postTestimonial)
app.get("/our-advisory-board-list",checklogin,testimonialController.getTestimonialList)
app.get("/delete-our-advisory-board",checklogin,testimonialController.deleteTestimonial)
app.get("/update-our-advisory-board",checklogin,testimonialController.getUpdateTestimonialPage)
app.post("/update-our-advisory-board-store",checklogin,upload.single("image"),testimonialController.updateTestimonial)
app.post("/our-advisory-board-main-title-update-store",checklogin,testimonialController.titleAndDescriptionUpdateStore)
//testimonial end




//Case Studies start
app.get("/add-case-studies",checklogin,blogController.getAddBlog)
app.post("/case-studies-store",checklogin,upload.single("image"),blogController.blogStore)
app.get("/case-studies-list",checklogin,blogController.blogsList)
app.get("/delete-case-studies",checklogin,blogController.deleteBlog)
app.get("/update-case-studies",checklogin,blogController.updateBlog)
app.post("/update-case-studies-store",checklogin,upload.single("image"),blogController.updateStore)
app.post("/case-studies-main-title-update-store",checklogin,blogController.titleAndDescriptionUpdateStore)
//Case Studies End 




//contact start
// 
app.get("/update-setting",checklogin,contactController.updateContact)
app.post("/update-setting-store",checklogin,contactController.updateStore)
//contact end



//news letter start
 app.get("/news-letters",checklogin,newsLetterController.newsLetters)
 app.get("/delete-news",checklogin,newsLetterController.deleteNewsLetters)
//news letter end


//faq start
app.get("/faq",checklogin,faqController.faq)
app.post("/post-faq",checklogin,faqController.faqStore)
app.get("/faq-list",checklogin,faqController.faqList)
app.get("/delete-faq",checklogin,faqController.deletefaq)
app.get("/update-faq",checklogin,faqController.updatefaq)
app.post("/update-faq-store",checklogin,faqController.updatefaqStore)
app.get("/faq-contacts",checklogin,faqController.faqContactList)
//faq end


//slug start
  app.get("/slug",checklogin,slugController.slug)
  app.post("/post-slug",checklogin,slugController.slugStore)
  app.get("/slug-list",checklogin,slugController.slugList)
  app.get("/delete-slug",checklogin,slugController.deleteSlug)
  app.get("/update-slug",checklogin,slugController.updateSlug)
  app.post("/update-slug-store",checklogin,slugController.updateSlugStore)
  
//slug end



//why we start
  app.get("/why-we",checklogin,whyWeController.whyWe)
  app.post("/post-why-we",checklogin,upload.single("image"),whyWeController.whyWeStore)
  app.get("/why-we-list",checklogin,whyWeController.whyWeList)
  app.get("/delete-why-we",checklogin,whyWeController.deletewhyWe)
  app.get("/update-why-we",checklogin,whyWeController.updateWhyWe)
  app.post("/update-why-we-store",checklogin,upload.single("image"),whyWeController.updateWhyWeStore)  
//why we end


//why we count start
  app.get("/why-we-count",checklogin,whyWeCountController.whyWeCount)
  app.post("/why-we-count-store",checklogin,whyWeCountController.whyWeCountStore)
  app.get("/why-we-count-list",checklogin,whyWeCountController.whyWeCountList)
  app.get("/delete-why-we-count",checklogin,whyWeCountController.deleteWhyWeCount)
  app.get("/update-why-we-count",checklogin,whyWeCountController.updateWhyWeCount)
  app.post("/update-why-we-count-store",checklogin,whyWeCountController.updateWhyWeCountStore)
//why we count end

//contact us start
 app.get("/contact-us-list",checklogin,contactUsController.contactUsList)
 
//contact us end


//our approach start
app.get("/our_approach",checklogin,ourApproachController.getOurApproach)
app.post("/our-approach-store",checklogin,upload.single("image"),ourApproachController.ourApproachStore)
app.get("/approach-list",checklogin,ourApproachController.approachList)
app.get("/delete-our-approach",checklogin,ourApproachController.deleteApproach)
app.get("/update-our-approach",checklogin,ourApproachController.updatePage)
app.post("/our-approach-upadte-store",checklogin,upload.single("image"),ourApproachController.ourApproachUpdateStore)
app.post("/our-approach-main-title-update-store",checklogin,ourApproachController.titleAndDescriptionUpdateStore)
//our approach End


//dimensions start
app.get("/get-dimensions-info-tech",checklogin,dimensionsController.getInnovative)
app.post("/dimensions-info_tech-store",checklogin,dimensionsController.innovativeStore)
app.get("/dimensions-info_tech-list",checklogin,dimensionsController.innovativeList)
app.get("/delete-dimensions-info-tech",checklogin,dimensionsController.deleteInnovative)
app.get("/dimensions-info-tech-update",checklogin,dimensionsController.updatePage)
app.post("/dimensions-info-tech-update-store",checklogin,dimensionsController.innovativeUpdateStore)
app.post("/innovative-main-title-update-store",checklogin,dimensionsController.titleAndDescriptionUpdateStore)


//dimensions end





//Typical Attacks Start

app.get("/typical-attacks",checklogin,operationController.getOperation)
app.post("/typical-attacks-store",checklogin,operationController.operationStore)
app.get("/typical-attacks-list",checklogin,operationController.operationList)
app.get("/delete-typical-attacks",checklogin,operationController.deleteOperation)
app.get("/typical-attacks-update",checklogin,operationController.updatePage)
app.post("/typical-attacks-update-store",checklogin,operationController.operationUpdateStore)
app.post("/typical-attacks-main-title-update-store",checklogin,operationController.titleAndDescriptionUpdateStore)
//Typical Attacks End

// //Security service main title Start

// app.get("/security-service-main-title",checklogin,securityServiceMainTitleController.getTitleAndDescription)
// app.post("/security-service-main-title-store",checklogin,securityServiceMainTitleController.titleAndDescriptionStore)
// app.get("/security-service-main-title-list",checklogin,securityServiceMainTitleController.titleAndDescriptionList)
// app.get("/delete-security-service-main-title",checklogin,securityServiceMainTitleController.deletetitleAndDescription)
// app.get("/security-service-main-title-update",checklogin,securityServiceMainTitleController.getUpdatePage)
// app.post("/security-service-main-title-update-store",checklogin,securityServiceMainTitleController.titleAndDescriptionUpdateStore)

// //Security service main title End



// //Main service main title Start
// app.get("/main-service-main-title",checklogin,mainServiceMainTitleController.getTitleAndDescription)
// app.post("/main-service-main-title-store",checklogin,mainServiceMainTitleController.titleAndDescriptionStore)
// app.get("/main-service-main-title-list",checklogin,mainServiceMainTitleController.titleAndDescriptionList)
// app.get("/delete-main-service-main-title",checklogin,mainServiceMainTitleController.deletetitleAndDescription)
// app.get("/main-service-main-title-update",checklogin,mainServiceMainTitleController.getUpdatePage)
// app.post("/main-service-main-title-update-store",checklogin,mainServiceMainTitleController.titleAndDescriptionUpdateStore)
// //Main service main title End



// //Innovative main title Start
// app.get("/innovative-main-title",checklogin,innovativeMainTitleController.getTitleAndDescription)
// app.post("/innovative-main-title-store",checklogin,innovativeMainTitleController.titleAndDescriptionStore)
// app.get("/innovative-title-list",checklogin,innovativeMainTitleController.titleAndDescriptionList)
// app.get("/delete-innovative-main-title",checklogin,innovativeMainTitleController.deletetitleAndDescription)
// app.get("/innovative-main-title-update",checklogin,innovativeMainTitleController.getUpdatePage)
// app.post("/innovative-main-title-update-store",checklogin,innovativeMainTitleController.titleAndDescriptionUpdateStore)
// //Innovative main title End


// //Our Approach main title Start
// app.get("/testimonial-main-title",checklogin,testimonialMainTitleController.getTitleAndDescription)
// app.post("/testimonial-main-title-store",checklogin,testimonialMainTitleController.titleAndDescriptionStore)
// app.get("/testimonial-main-title-list",checklogin,testimonialMainTitleController.titleAndDescriptionList)
// app.get("/delete-testimonial-main-title",checklogin,testimonialMainTitleController.deletetitleAndDescription)
// app.get("/testimonial-main-title-update",checklogin,testimonialMainTitleController.getUpdatePage)
// app.post("/testimonial-main-title-update-store",checklogin,testimonialMainTitleController.titleAndDescriptionUpdateStore)
// //Innovative main title End





// //Operation main title Start
// app.get("/operation-main-title",checklogin,operationMainTitleController.getTitleAndDescription)
// app.post("/operation-main-title-store",checklogin,operationMainTitleController.titleAndDescriptionStore)
// app.get("/operation-main-title-list",checklogin,operationMainTitleController.titleAndDescriptionList)
// app.get("/delete-operation-main-title",checklogin,operationMainTitleController.deletetitleAndDescription)
// app.get("/operation-main-title-update",checklogin,operationMainTitleController.getUpdatePage)
// app.post("/operation-main-title-update-store",checklogin,operationMainTitleController.titleAndDescriptionUpdateStore)
// //Operation main title End


// //Blog main title Start
// // app.get("/blog-main-title",checklogin,blogMainTitleController.getTitleAndDescription)
// app.post("/blog-main-title-store",checklogin,blogMainTitleController.titleAndDescriptionStore)
// //app.get("/blog-main-title-list",checklogin,blogMainTitleController.titleAndDescriptionList)
// app.get("/delete-blog-main-title",checklogin,blogMainTitleController.deletetitleAndDescription)
// app.get("/blog-main-title-update",checklogin,blogMainTitleController.getUpdatePage)
// app.post("/blog-main-title-update-store",checklogin,blogMainTitleController.titleAndDescriptionUpdateStore)
// //Blog main title End



// //Our vision and mission main title Start
// app.post("/our-vision-main-title-store",checklogin,ourVisionMainTitleController.titleAndDescriptionStore)
// app.get("/delete-our-vision-main-title",checklogin,ourVisionMainTitleController.deletetitleAndDescription)
// app.get("/our-vision-main-title-update",checklogin,ourVisionMainTitleController.getUpdatePage)
// app.post("/our-vision-main-title-update-store",checklogin,ourVisionMainTitleController.titleAndDescriptionUpdateStore)
// //Our vision and mission main title End




// // most completed main title Start
// app.post("/most-completed-main-title-store",checklogin,mostCompletedMainTitleController.titleAndDescriptionStore)
// app.get("/delete-most-completed-main-title",checklogin,mostCompletedMainTitleController.deletetitleAndDescription)
// app.get("/most-completed-main-title-update",checklogin,mostCompletedMainTitleController.getUpdatePage)
// app.post("/most-completed-main-title-update-store",checklogin,mostCompletedMainTitleController.titleAndDescriptionUpdateStore)
// // most completed main title End


// // career main title Start
// app.post("/career-main-title-store",checklogin,careerMainTitleController.titleAndDescriptionStore)
// app.get("/delete-career-main-title",checklogin,careerMainTitleController.deletetitleAndDescription)
// app.get("/career-main-title-update",checklogin,careerMainTitleController.getUpdatePage)
// app.post("/career-main-title-update-store",checklogin,careerMainTitleController.titleAndDescriptionUpdateStore)
// // most completed main title End

// // career main title Start
// app.post("/industry-main-title-store",checklogin,industryMainTitleController.titleAndDescriptionStore)
// app.get("/delete-industry-main-title",checklogin,industryMainTitleController.deletetitleAndDescription)
// app.get("/industry-main-title-update",checklogin,industryMainTitleController.getUpdatePage)
// // app.post("/industry-main-title-update-store",checklogin,industryMainTitleController.titleAndDescriptionUpdateStore)
// // most completed main title End




// // career main title Start
// app.post("/our-approach-main-title-store",checklogin,ourApproachMainTitleController.titleAndDescriptionStore)
// app.get("/delete-our-approach-main-title",checklogin,ourApproachMainTitleController.deletetitleAndDescription)
// app.get("/our-approach-main-title-update",checklogin,ourApproachMainTitleController.getUpdatePage)
// // app.post("/our-approach-main-title-update-store",checklogin,ourApproachMainTitleController.titleAndDescriptionUpdateStore)
// // most completed main title End




//-----------------------------------------industry----------------------------------------------------

//industry details start
const industryImage = upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'image', maxCount: 8 }])

app.get("/industry-details",checklogin,industryDetailsController.getIndustryDetailsPage)
app.post("/industry-details-store",industryImage,checklogin,industryDetailsController.industryStore)
app.get("/industry-details-list",checklogin,industryDetailsController.industryList)
app.get("/delete-industry-details",checklogin,industryDetailsController.industryDelete)
app.get("/industry-details-update",checklogin,industryDetailsController.getUpdatePage)
app.post("/industry-detailse-update-store",checklogin,industryImage,industryDetailsController.industryUpdateStore)
app.post("/industry-main-title-update-store",checklogin,industryDetailsController.titleAndDescriptionUpdateStore)

//industry  details end


//start indsurty image
app.get("/add-industry-images",checklogin,industryImagesController.addIndustryImage)
app.post("/post-industry-images",checklogin,upload.single("image"),industryImagesController.postIndustryImage)
app.get("/industry-images-list",checklogin,industryImagesController.industryImageList)
app.get("/delete-industry-images",checklogin,industryImagesController.deleteIndustryImage)
app.get("/update-industry-images",checklogin,industryImagesController.updateIndustryImage)
app.post("/update-industry-images-store",checklogin,upload.single("image"),industryImagesController.updateIndustryImageStore)
//end  indsurty image




//start indsurty image
app.get("/get-video-time",checklogin,thumbnailController.getVideoTime)
app.post("/post-video-time",checklogin,upload.single("video"),thumbnailController.postvideoTime)
// app.get("/industry-images-list",checklogin,industryImagesController.industryImageList)
// app.get("/delete-industry-images",checklogin,industryImagesController.deleteIndustryImage)
// app.get("/update-industry-images",checklogin,industryImagesController.updateIndustryImage)
// app.post("/update-industry-images-store",checklogin,upload.single("image"),industryImagesController.updateIndustryImageStore)
//end  indsurty image


 module.exports=app