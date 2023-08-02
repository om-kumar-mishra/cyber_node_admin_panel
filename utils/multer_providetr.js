const  multer=require("multer")
const  path=require("path")
const fs = require('fs');

//configuration of multer
let storage=multer.diskStorage(
    {
        // destination:function(request, file,callback)
        // {
        //     // console.log("_dirname ="+path.join(__dirname,'..',"image"))
        //       callback(null, path.join(__dirname,'..',"public","uploaded-files"));             
           
        // },
        // filename:function(request,file,callback)
        // {
            
        //    callback(null,file.originalname);
        // }



        destination: function (req, file, cb) {
            const filesDir =  path.join(__dirname,'..',"public","uploaded-files")
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
    })
    
    const upload=multer({storage:storage});

    module.exports=upload