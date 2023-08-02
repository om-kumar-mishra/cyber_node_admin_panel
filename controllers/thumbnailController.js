const thumbsupply = require('thumbsupply');
// const thumbsupply = require('../thumb');
var FfmpegCommand = require('fluent-ffmpeg');
const ffprobe = require('@ffprobe-installer/ffprobe');
 
 exports.getVideoTime=(req,res)=>{
    res.render("example/get_thumbnail", { title: "Thumbnail", userdetials: req.session.user })
}


exports.postvideoTime=(req,res)=>{
    // const { getVideoDurationInSeconds } = require('get-video-duration');
    // getVideoDurationInSeconds(`http://localhost:8080/uploaded-files/${req.file.filename}`).then((duration) => {
    //     res.json({
    //               message:"time of video",
    //               time:duration
    //             });
    // }) 

    console.log("path========",req.file.path)
    thumbsupply.generateThumbnail(req.file.path, {
        
        size: thumbsupply.ThumbSize.MEDIUM, // or ThumbSize.LARGE
        timestamp: "10%", // or `30` for 30 seconds
        forceCreate: true,
        cacheDir: "../thumb",
        mimetype: "video/mp4"
    })
    .then((thumbnail)=>{
        console.log(thumbnail)
        var command = FfmpegCommand(__dirname+"/"+thumbnail
        
        
        );
        res.download(__dirname+"/"+thumbnail,(err)=>{

        })
    })

}