const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { checksession } = require('../utils/sessioncheck');

// const courseController = require("../controllers/admin/courseController");
const adminController = require("../controllers/admin/adminController");



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filesDir = path.join('public/upload-ids');
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir);
    }
    // Uploads is the Upload_folder_name
    cb(null, filesDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

const recordedstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filesDir = path.join('public/uploaded-files');
    console.log(file);
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir);
    }
    // Uploads is the Upload_folder_name
    cb(null, filesDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const recordedupload = multer({ storage: recordedstorage })

const digitalMaterialstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filesDir = path.join('public/uploaded-files');
    console.log(file);
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir);
    }
    // Uploads is the Upload_folder_name
    cb(null, filesDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const digitalMaterialupload = multer({ storage: digitalMaterialstorage })

const liveSessionVstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filesDir = path.join('public/uploaded-files');
    console.log(file);
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir);
    }
    // Uploads is the Upload_folder_name
    cb(null, filesDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const liveSessionVupload = multer({ storage: liveSessionVstorage })

module.exports = (app) => {
   //admin prfile
   app.get("/profile", checksession, adminController.profile);
   app.post("/checkoldpassword", checksession, upload.none(), adminController.checkoldpassword);
   app.post("/superadmin-change-password", checksession, upload.none(), adminController.changePassword);
   app.post("/superadmin-update", checksession, upload.none(),adminController.superadminUpdate);
   //end admin profile

 

   
  
}