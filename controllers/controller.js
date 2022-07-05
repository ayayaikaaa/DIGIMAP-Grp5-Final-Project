const { spawn } = require("child_process");
const mime = require('mime-types');
const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
        res.render('index', {});
    },

    postQueue: function (req, res) {
        res.redirect('/');
    },

    postUpload: function (req, res, next) {
        console.log(req.file);
        const inf = require('child_process').exec('python Real-ESRGAN/inference_realesrgan.py -i public/uploads/' + req.file.filename + ' -s 3.5 -o public/output/ --ext png --fp32 --tile 30')

        inf.stdout.pipe(process.stdout);
        
        inf.on('exit', function() {
            var imgFilename = (req.file.filename).replace(/.jpg/g, ".jpeg");
            var imgOutput = "./output/" + imgFilename.replace("." + mime.extension(req.file.mimetype), "") + "_out.png";
            res.send(imgOutput);
        });

        inf.stdout.on('data', function(data) {
            console.log("stdout: " + data)
        });
  

        inf.stderr.on('data', function(data) {
            console.log("stderr: " + data)
        });
  
    }
}

module.exports = controller;
