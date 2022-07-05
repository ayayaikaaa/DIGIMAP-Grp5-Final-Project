const { spawn } = require("child_process");
const mime = require('mime-types');
const aws = require('aws-sdk');

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

    postUpload: async function (req, res, next) {
        const s3 = new aws.S3();
        const s3Params = {
            Bucket: process.env.S3_BUCKET,
            Key: req.file.filename,
            Body: req.file,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read'
        };

        s3.upload(s3params, function(err, data) {
            console.log(err, data);
        });

        const inf = require('child_process').exec('python ./Real-ESRGAN/inference_realesrgan.py -i ./public/uploads/' + req.file.filename + ' -s 3.5 -o ./public/output/ --ext png')

        inf.stdout.pipe(process.stdout);
        
        inf.on('exit', function() {
            var imgFilename = (req.file.filename).replace(/.jpg/g, ".jpeg");
            var imgOutput = "./output/" + imgFilename.replace("." + mime.extension(req.file.mimetype), "") + "_out.png";
            res.send(imgOutput);
        });
  
    }
}

module.exports = controller;
