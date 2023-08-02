const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const fs = require('fs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
//const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const toastr = require('express-toastr')
const flash = require('connect-flash');

// const toastr = require('express-toastr');
const bcrypt = require('bcryptjs');
const superAdminModel = require('./models').SuperAdmin;
const security_service = require('./models').security_service;
const main_service = require('./models').main_service;
const blog = require('./models').blog;
const career_info = require('./models').career_info;
const industry_details = require('./models').industry_details;

// const firebaseController=require("./controllers/firrbaseControlle")

const cyberSecurityRoute = require("./routes/cyberSecurity")
const cyberSecurityApi = require("./routes/cyberSecurityApi")
const aboutUsRoute = require("./routes/aboutUsRoute")



app.use(logger('dev'));
app.use(cors());

app.use(cookieParser());
app.use(session({
  key: 'user_id',
  secret: 'somerandonstuffs',
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: 3600000
  }
}));


app.use(flash());
app.use(toastr());
app.use((req, res, next) => {
  app.locals.session = req.session;
  app.locals.flash = req.flash;
  next();
})

//toastr
app.use(function (req, res, next) {
  res.locals.toasts = req.toastr.render()
  next()
});

app.use((req, res, next) => {
  if (req.cookies.user_id && !req.session.user) {
    res.clearCookie('user_id');
  }
  next();
});

// parse requests of content-type - application/json
app.use(express.json());
//app.use(body.json())
//app.use(flash());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// require('dotenv').config({ path: '' })
const db = require("./models");
// session check 
let req = {};
var sessionChecker = async (req, res, next) => {
  let service_count = await security_service.count()
  let main_service_count = await main_service.count()
  let blog_count = await blog.count()
  let career_count = await career_info.count()

let  industry_count=await industry_details.count()
  if (req.session.loggedin) {

    res.render('dashboard', {
      title: 'Cyber Security',
      userdetials: req.session.user,
      service_count: service_count,
      main_service_count: main_service_count,
      blog_count: blog_count,
      career_count: career_count,
      industry_count:industry_count
    })
  } else {
    next();
  }
};

db.sequelize.sync();

// simple route
app.get("/", sessionChecker, (req, res) => {
  //res.json({ message: "Welcome to cyber security application." });
  res.render('login', { title: 'Login Admin' });
});

app.route('/login')
  .get(sessionChecker, (req, res) => {

    res.render('login', { title: 'Login', userdetials: req.session.user });
  });

app.post('/login', async function (req, res) {
  // Capture the input fields
  let username = req.body.username;
  let password = req.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {

    const user = await superAdminModel.findOne({ where: { email: req.body.username } });
    console.log(user);
    if (user) {
      const dbpass = user.password;

      const match = await bcrypt.compare(password, dbpass);
      console.log(match);
      if (match) {
        req.toastr.success(" Login successful.");

        req.session.loggedin = true;
        req.session.username = username;
        req.session.user = user.dataValues;
        res.redirect('/');

      } else {
        res.render('login', { title: 'Login', errorMessage: 'Provided password not matched with our records.' });

      }

    } else {

      res.render('login', { title: 'Login Admin', errorMessage: 'Provided email and password not matched with our records.' });

    }

  } else {
    res.render('login', { title: 'Login', errorMessage: 'Please enter Username and Password!' });
    //res.send('Please enter Username and Password!');
    res.end();
  }
});
// route for user logout
app.get('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/');
});



//firebase constroller



//app.get('/books',firebaseController.books);
//  app.get('/book',firebaseController.poatBooks);






//cyber security route
app.use("/", cyberSecurityRoute)
app.use("/api", cyberSecurityApi)
app.use("/", aboutUsRoute)
//data admin route
require("./routes/adminRoutes")(app)
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
//app.set('view options', { layout: false });
app.set('views', path.join(__dirname, 'server/views'));

// app.get("/:universalURL", (req, res) => {
//     res.send("404 URL NOT FOUND");
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});