const Banner = require("../../models").banner
const bannerContent = require("../../models").bannerContent
const mainService = require("../../models").main_service
const testimonial = require("../../models").testimonial
const contact = require("../../models").contact
const blog = require("../../models").blog
const partner = require("../../models").partner
const security_service = require("../../models").security_service
const news_letter = require("../../models").news_letter
const faq = require("../../models").faq
const Sulg = require("../../models").slug
const contact_us = require("../../models").contact_us
const faq_contact = require("../../models").faq_contact
const operation = require("../../models").operation
const innovative = require("../../models").innovative
const our_approach = require("../../models").our_approach
const most_complete = require("../../models").most_complete
const industry_details = require("../../models").industry_details
const industry_images = require("../../models").industry_images

const career_info = require("../../models").career_info
const securityservicemaintitle = require("../../models").securityservicemaintitle
const main_service_main_titledesc = require("../../models").main_service_main_titledesc
const blog_main_titledesc = require("../../models").blog_main_titledesc
const our_approach_main_titledesc = require("../../models").our_approach_main_titledesc
const industry_main_titledesc = require("../../models").industry_main_titledesc
const testimonial_main_titledesc = require("../../models").testimonial_main_titledesc
const operation_main_titledesc = require("../../models").operation_main_titledesc
const innovation_main_titledesc = require("../../models").innovation_main_titledesc
// const our_vision_main_titledesc = require("../../models").our_vision_main_titledesc
// const most_completed_main_titledesc = require("../../models").most_completed_main_titledesc
const about_us = require("../../models").about_us
const comman_banner = require("../../models").comman_banner

















const nodemailer = require("nodemailer");

const { NUMBER } = require("sequelize")
const validator = require('validator');

//get all banner api
exports.getlistOfBanner = async (req, res) => {
  try {
    let data = await Banner.findOne({})
    res.status(200).json({ message: "all banner list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })

  }
}

//get all banner content api
exports.getlistOfBannerContent = async (req, res) => {
  try {
    let data = await bannerContent.findAll({})
    res.status(200).json({ message: "all banner content list", code: 200, data: data })

  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })

  }

}


//get list of main service
exports.mainServiceList = async (req, res) => {

  var pageSize = await mainService.count();
  // var numberOfRows, numberOfPages;
  var numberPerPage = 6;
  var get_page = req.query.page ? req.query.page : 1
  page = Number.parseInt(get_page)
  var skip = (page - 1) * numberPerPage;
  // var limit = `${skip} , ${numberPerPage}`;
  numberOfPages = Math.ceil(pageSize / numberPerPage)

  // const count = await mainService.count();

  //let pageSize * (page - 1);

  try {
    let data = await mainService.findAll({ limit: numberPerPage, offset: skip })
    res.status(200).json({
      message: "all main service list", code: 200, data: {
        current: page,
        has_previous: page > 1,
        previous: page - 1,
        has_next: page < numberOfPages,
        next: page + 1,
        total_data: pageSize,
        list: data
        // last_page: Math.ceil(numberOfRows / pageSize)
      }
    })

  }
  catch (error) {
    console.log(error)
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}
//get list of main service
exports.singleMainServiceList = async (req, res) => {
  console.log("req.query.service_id====", req.query.service_id)
  try {

    let data = await mainService.findOne({
      where: {
        id: req.query.service_id
      }
    })
    console.log(data)
    res.status(200).json({ message: " get main service list  by id", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}

//get list of testimonial

exports.testimonial = async (req, res) => {
  try {
    let data = await testimonial.findAll({})
    res.status(200).json({ message: "all testimonial list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }

}

//get all contact list
exports.contacts = async (req, res) => {
  try {
    let data = await contact.findOne({})
    res.status(200).json({ message: "all conatct list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
}

//get all blogs list
exports.blogsList = async (req, res) => {
  try {
    if (req.query.id) {
      let data = await blog.findOne({ where: { id: req.query.id } })
      res.status(200).json({ message: "Latest news details", code: 200, data: data })
    }
    else {
      let data = await blog.findAll({})
      res.status(200).json({ message: "all blog list", code: 200, data: data })
    }
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
}

//get all partner list

exports.partnerList = async (req, res) => {
  try {
    let data = await partner.findAll({})
    res.status(200).json({ message: "all partner  list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
}

//get all security service list
exports.securityServiceList = async (req, res) => {
  try {
    let data = await security_service.findAll({})
    res.status(200).json({ message: "all security service   list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
}

















//post news letter


exports.newsLetter = async (req, res) => {
  try {

    let checkEmail = await news_letter.findOne({ where: { email: req.body.email } })
    if (checkEmail) {
      return res.status(400).json({ message: "you have already subscribed", code: 400 })
    }
    else {


      news_letter.create({
        email: req.body.email
      })
        .then((data) => {
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "alobha.appdevelopment@gmail.com", // generated ethereal user
              pass: "driznjcjwfdpkwzi", // generated ethereal password
            },
          });
    
    
          //Send Email
          let info = {
            from: "alobha.appdevelopment@gmail.com", // sender address
            to: `${req.body.email},alobha.appdevelopment@gmail.com`, // list of receivers
            subject: `Cyber security`, // Subject line
            html:`<!doctype html>
            <html lang="en">
              <head>
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            
                <title>Cyber Security</title>
              </head>
              <body class="container" style={background-image: url("http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png");}>
                <h1 class="text-center text-info">Cyber Security</h1>

                <img src="http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png">
                  </img>
                <br>
               
                <h3 class="text-center text-danger">Your email id ${req.body.email}</h3>
               
                <br>
                <h4>Thank you for contacting Cyber Security.<br/>We will revert back to your query soon.</h4>
                <a class="btn btn-primary" href="http://cyberdev.alobhaitsolution.com/">Go to website</a>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            
                <!-- Option 2: Separate Popper and Bootstrap JS -->
                <!--
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
                -->
              </body>
            </html>` , // html body
          };
    
    
          transporter.sendMail(info, (error, details) => {
            if (error) {
    
              return res.status(406).json({ message: "not subscribed", code: 406 })
    
            }
            else {
    
              return res.status(406).json({ message: "sucessfully subscribed", code: 406 })
    
            }
          })
          res.status(200).json({ message: "sucessfully subscribed", code: 200, data: data })
        })
        .catch((error) => {
          res.status(200).json({ message: "not subscribed", code: 400 })

        })


   


    }
  }
  catch (error) {
    res.status(200).json({ message: "Something unexpected happened", code: 400 })

  }

}



//get list of faq

exports.faqList = async (req, res) => {
  try {
    let data = await faq.findAll({})
    res.status(200).json({ message: "all security service   list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
}

//get all slug

exports.slugList = async (req, res) => {
  // console.log(req.query.slug_name)
  try {
    let data = await Sulg.findOne({
      where: {
        slugName: req.query.slug_name
      }
    })
    res.status(200).json({ message: "all security service   list", code: 200, data: data })
  }
  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error })
  }
}



//add contact us
exports.contactUs = async (req, res) => {

  try {
    //check email
    //let checkEmail = await contact_us.findOne({ where: { email: req.body.email } })
    //let checkPhone = await contact_us.findOne({ where: { phone: req.body.phone } })

    // if (checkEmail) {
    //   return res.status(409).json({ Message: "Email already exists ", code: 409 })
    // }

    //check phone
    // else if (checkPhone) {
    //   return res.status(409).json({ Message: "Phone number already exists ", code: 409 })
    // } else {
    //validation
    if (validator.isEmpty(req.body.name)) {
      return res.status(406).json({ Message: "Name must not be empty ", code: 406 })
    }
    // else if (!validator.isAlpha(req.body.name, ["en-US"], { ignore: " " })) {
    //   return res.status(406).json({ Message: "Name must be in letter ", code: 406 })
    // }

    else if (!validator.isNumeric(req.body.phone)) {
      return res.status(406).json({ Message: "Phone number must be in numeric ", code: 406 })
    }

    else if (req.body.phone.length != 10) {
      return res.status(406).json({ Message: "Phone number must be in 10 digits", code: 406 })
    }

    else if (!validator.isEmail(req.body.email)) {
      return res.status(406).json({ Message: "Email must be in @gmail.com formate", code: 406 })
    }
    else {



      // Email       
     


      const data = await contact_us.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message
      })
      if (data) {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "alobha.appdevelopment@gmail.com", // generated ethereal user
            pass: "driznjcjwfdpkwzi", // generated ethereal password
          },
        });
  
  
  
        let info = {
          from: "alobha.appdevelopment@gmail.com", // sender address
          to: `${req.body.email},alobha.appdevelopment@gmail.com`, // list of receivers
          subject: `hello ${req.body.name}`, // Subject line
          // text: "sucessfully save your Frequently Asked Questions ",
            html:`<!doctype html>
          <html lang="en">
            <head>
              <!-- Required meta tags -->
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
          
              <!-- Bootstrap CSS -->
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
          
              <title>Cyber Security</title>
            </head>
            <body class="container" style={background-image: url("http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png");}>
              <h1 class="text-center text-info">Cyber Security</h1>
              <img src="http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png">
                  </img>
              <br>
              <h3 class="text-center text-danger">Hello ${req.body.name}</h3>
              <h3 class="text-center text-danger">Your email id ${req.body.email}</h3>
              <h3 class="text-center text-danger">Your phone number ${req.body.phone}</h3>
              <h3 class="text-center text-danger">Your subject ${req.body.subject}</h3>
              <p class="text-center text-danger">Your subject ${req.body.message}</p>
              <br>
              <h4>Thank you for contacting Cyber Security.<br/>We will revert back to your query soon.</h4>
              <a class="btn btn-primary" href="http://cyberdev.alobhaitsolution.com/">Go to website</a>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          
              <!-- Option 2: Separate Popper and Bootstrap JS -->
              <!--
              <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
              -->
            </body>
          </html>` , // html body
        };
  
  
        transporter.sendMail(info, (error, details) => {
          if (error) {
  
            return res.status(406).json({ Message: "your contact is not saved ", code: 406 })
  
          }
          else {
  
            return res.status(406).json({ Message: "Thank you for contacting Cyber Security", code: 406 })
  
          }
        })
        res.status(200).json({ Message: "add contact us successful", code: 200, data: data })

      }
      else {
        res.status(400).json({ Message: "Something unexpected happened.", code: 400 })
      }

    }


  }

  catch (error) {
    res.status(400).json({ message: "error in code", code: 400, data: error.message })
  }
}


exports.faqContact = async (req, res) => {
  try {


    //check email
    // let checkEmail = await faq_contact.findOne({ where: { email: req.body.email } })
    // if (checkEmail) {
    //   return res.status(409).json({ Message: "email is already exist ", code: 409 })
    // }
    // .then((data)=>{
    //   return  res.status(400).json({ Message: "email is already exist ", code: 400 })
    // })

    //check phone

    // let checkPhone = await faq_contact.findOne({ where: { phone: req.body.phone } })
    // if (checkPhone) {
    //   return res.status(409).json({ Message: "phone is already exist ", code: 409 })
    // }


    //validation
    if (validator.isEmpty(req.body.name)) {
      return res.status(406).json({ Message: "name must be  not empty ", code: 406 })
    }

    // if (!validator.isAlpha(req.body.name, ["en-US"], { ignore: " " })) {
    //   return res.status(406).json({ Message: "name must be letter ", code: 406 })
    // }

    if (!validator.isNumeric(req.body.phone)) {
      return res.status(406).json({ Message: "phone number must be numeric ", code: 406 })
    }

    if (req.body.phone.length != 10) {
      return res.status(406).json({ Message: "phone number must be in 10 digits", code: 406 })
    }

    if (!validator.isEmail(req.body.email)) {
      return res.status(406).json({ Message: "email must be in @gmail.com formate", code: 406 })
    }



    // Email       


    await faq_contact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message
    })
      .then((data) => {
        if (data) {
      //     const userEmail = req.body.email;
      //     const userName = req.body.name;
      //     let config = {
      //         service: 'gmail',
      //         auth: {
      //             user: "alobha.appdevelopment@gmail.com",
      //             pass: "driznjcjwfdpkwzi"
      //         }
      //     }
      //     let transporter = nodemailer.createTransport(config);
      //     let mailGenerator = new Mailgen({
      //         theme: 'default',
      //         product: {
      //             name: "Cyber security",
      //             link:'http://cyberdev.alobhaitsolution.com/',
      //             // Optional product logo
      //             logo: 'http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png'
      //         }
      //     });
      //     let response = {
      //         body: {
      //             name: userName,
      //             intro: 'Welcome to Alobha Technologies Pvt ltd! We\'re very excited to have you on board.',
                
      //             action: {
      //                 instructions: 'Thank you for contacting us. We will revert back to you soon if your profile is found suitable for the role.',
      //                 button: {
      //                     color: '#1e4098', // Optional action button color
      //                     text: 'Cyber Security',
      //                     link:'http://cyberdev.alobhaitsolution.com/',
      //                 }
      //             },
      //             outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
      //         }
      //     };
      //     var emailBody = mailGenerator.generate(response);

      //     let message = {
      //         from:  "alobha.appdevelopment@gmail.com",
      //         to: userEmail,
      //         subject: "Your information has been received.",
      //         html: emailBody
      //     }
      //     transporter.sendMail(message).then(() => {
      //         return res.status(200).json({
      //             msg: 'Your message is saved successfully, You should have received the mail.',
      //             data,
      //             statuscode: 200
      //         })
      //     }
      //     )
      // } else {
      //     res.status(400).json({ msg: `Couldn't add data.`, statuscode: 400 });
      }

        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "alobha.appdevelopment@gmail.com", // generated ethereal user
            pass: "driznjcjwfdpkwzi", // generated ethereal password
          },
        });

        let info = {
          from: "alobha.appdevelopment@gmail.com", // sender address
          to: `${req.body.email},alobha.appdevelopment@gmail.com`, // list of receivers
          subject: `hello ${req.body.name}`, // Subject line

          html:`<!doctype html>
          <html lang="en">
            <head>
              <!-- Required meta tags -->
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
          
              <!-- Bootstrap CSS -->
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
          
              <title>Cyber Security</title>
            </head>
            <body class="container" style={background-image: url("http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png");}>
              <h1 class="text-center text-info">Cyber Security</h1>
              <img src="http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png">
                  </img>
              <br>
              <h3 class="text-center text-danger">Hello ${req.body.name}</h3>
              <h3 class="text-center text-danger">Your email id ${req.body.email}</h3>
              <h3 class="text-center text-danger">Your phone number ${req.body.phone}</h3>
              <h3 class="text-center text-danger">Your subject ${req.body.subject}</h3>
              <p class="text-center text-danger">Your subject ${req.body.message}</p>
              <br>
              <h4>Thank you for contacting Cyber Security.<br/>We will revert back to your query soon.</h4>
              <a class="btn btn-primary" href="http://cyberdev.alobhaitsolution.com/">Go to website</a>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          
              <!-- Option 2: Separate Popper and Bootstrap JS -->
              <!--
              <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
              -->
            </body>
          </html>` //"<b>Thank you for contacting Cyber Security.<br/>We will revert back to your query soon.</b>", // html body
        };

        transporter.sendMail(info, (error, details) => {
          if (error) {
            let message = "Error"
            return res.status(406).json({ Message: "your Frequently Asked Questions is not save ", code: 406 })

          }
          else {
            let message = "sucessfully sent"
            return res.status(406).json({ Message: "sucessfully sent", code: 406 })

          }
        })

        res.status(200).json({ message: "add faq contact us successfully save", code: 200, data: data })
      })

}
  catch (error) {
  res.status(400).json({ message: "Something unexpected happened.", code: 400, data: error.message })
}
}




//get all list of opration
exports.getOperationList = (req, res) => {
  operation.findAll({})
    .then((data) => {
      res.status(200).json({ message: "All operation list", code: 200, data: data })
    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })
    })
}

//get all list of innovative
exports.getInnovativeList = (req, res) => {
  innovative.findAll({})
    .then((data) => {
      res.status(200).json({ message: "All innovative list", code: 200, data: data })
    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}



//get all list most complete
exports.getMostCompleteList = (req, res) => {

  most_complete.findAll({})
    .then((data) => {
      res.status(200).json({ message: "All most complete list", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })

}


//get all list of our approach
exports.getOurApproachList = (req, res) => {
  our_approach.findAll({})
    .then((data) => {
      res.status(200).json({ message: "All our approach list", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}





//get all list of industry
exports.industry = (req, res) => {
  if (req.query.id) {
    industry_details.findOne({
      include: [{
        model: industry_images,
        as: "industry_image"
      }],
      where: { id: req.query.id }
    })
      .then((data) => {
        res.status(200).json({ message: "industry details", code: 200, data: data })

      })
      .catch((error) => {
        res.status(400).json({ message: "Something unexpected happened.", code: 400 })

      })
  }
  else {

    industry_details.findAll({})
      .then((data) => {
        res.status(200).json({ message: "All list of industry details", code: 200, data: data })

      })
      .catch((error) => {
        res.status(400).json({ message: "Something unexpected happened.", code: 400 })

      })

  }

}

//wfwef


//get all list of career
exports.career = (req, res) => {
  // console.log(req.file,"========================",req.body)
  if (req.file.originalname.endsWith(".pdf") || req.file.originalname.endsWith(".doc")||req.file.originalname.endsWith(".docx")) {
    console.log("file=========", req.file)
   


    career_info.create({
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      qulification: req.body.qulification,
      upload_resume: req?.file?.filename,
      email: req.body.email
    })
      .then((data) => {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "alobha.appdevelopment@gmail.com", // generated ethereal user
            pass: "driznjcjwfdpkwzi", // generated ethereal password
          },
        });
    
    
    
        let info = {
          from: "alobha.appdevelopment@gmail.com", // sender address
          to: `${req.body.email},alobha.appdevelopment@gmail.com`, // list of receivers
          subject: `hello ${req.body.name}`, // Subject line
          // text: "sucessfully save your Frequently Asked Questions ",
          html:`<!doctype html>
              <html lang="en">
                <head>
                  <!-- Required meta tags -->
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
              
                  <!-- Bootstrap CSS -->
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
              
                  <title>Cyber Security</title>
                </head>
                <body class="container" style={background-image: url("http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png");}>
                
                  <h1 class="text-center text-info">Cyber Security</h1>
                  <img src="http://alobhaitsolution.com:5005/uploaded-files/cyber-logo.png">
                  </img>
                  <br>
                  <h3 class="text-center text-danger">Hello ${req.body.name}</h3>
                  <h3 class="text-center text-danger">Your email id ${req.body.email}</h3>
                  <h3 class="text-center text-danger">Your phone number ${req.body.phone}</h3>
                  <h3 class="text-center text-danger">Your address ${req.body.address}</h3>
                  <h3 class="text-center text-danger">Your qulification ${req.body.qulification}</h3>
                  <a target="__blank"  href=http://alobhaitsolution.com:5005/uploaded-files/${req?.file?.filename}>Your resume</a>
                  <br>
                  <h4>Thank you for contacting Cyber Security.<br/>We will revert back to your query soon.</h4>
                  <a class="btn btn-primary" href="http://cyberdev.alobhaitsolution.com/">Go to website</a>
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
              
                  <!-- Option 2: Separate Popper and Bootstrap JS -->
                  <!--
                  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
                  -->
                </body>
              </html>` , // html body
        };
    
    
        transporter.sendMail(info, (error, details) => {
          if (error) {
    
            return res.status(406).json({ Message: "your contact is not saved ", code: 406 })
    
          }
          else {
    
            return res.status(406).json({ Message: "Thank you for contacting Cyber Security", code: 406 })
    
          }
        })

        res.status(200).json({ message: "your career information successfull save", code: 200 })

      })
      .catch((error) => {
        res.status(400).json({ message: "Something unexpected happened.", code: 400 })

      })

  }
  else {
    console.log("only .jpg .jpeg .png file acceptable")
    res.status(400).json({ message: "only .pdf .doc file acceptable ", code: 200 })
  }

  // industry_details.findAll({})
  // .then((data)=>{
  //   res.status(200).json({ message: "All our approach list", code: 200, data: data })

  // })
  // .catch((error)=>{
  //   res.status(400).json({ message: "Something unexpected happened.", code: 400 })

  // })
}


//-----------------------------------------------------Main title And description---------------------------------------------
//wfwef
//get all list of securiyt service main title and description
exports.securityServiceMainTitle = (req, res) => {
  securityservicemaintitle.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All list of security service main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}




exports.MainServiceMainTitle = (req, res) => {
  main_service_main_titledesc.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All list of  High Performance  main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}



exports.caseStudiesMainTitle = (req, res) => {
  blog_main_titledesc.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All list of  High Performance  main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}


exports.ourApproach = (req, res) => {
  our_approach_main_titledesc.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All list of  High Performance  main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}



exports.industryMainTitle = (req, res) => {
  industry_main_titledesc.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All list of  High Performance  main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}


exports.ourAdvisory = (req, res) => {
  testimonial_main_titledesc.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All list of  Our Advisory Board  main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}





exports.typicalAttacks = (req, res) => {
  operation_main_titledesc.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All list of typical attacks main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}






exports.dimensionsInfoTechno = (req, res) => {
  innovation_main_titledesc.findOne({})
    .then((data) => {
      res.status(200).json({ message: "All The Dimensions Of Information Technologys main title", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}





exports.aboutUs = (req, res) => {
  about_us.findOne({})
    .then((data) => {
      res.status(200).json({ message: "About Details", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}





//comman banner

exports.commanBanner = (req, res) => {
  comman_banner.findOne({})
    .then((data) => {
      res.status(200).json({ message: "Comman banner", code: 200, data: data })

    })
    .catch((error) => {
      res.status(400).json({ message: "Something unexpected happened.", code: 400 })

    })
}