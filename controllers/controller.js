const { spawn } = require("child_process");
const mime = require('mime-types');
const fs = require('fs');

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
        const inf = require('child_process').exec('python ./Real-ESRGAN/inference_realesrgan.py -i ./public/uploads/' + req.file.filename + ' -s 3.5 -o ./public/output/')

        inf.stdout.pipe(process.stdout);
        inf.on('exit', function() {
            var imgOutput = req.file.filename;

            var imgData = {
                imgInput: "./public/uploads" + req.file.filename,
                imgOutput: "./public/output/" + imgOutput.replace("." + mime.extension(req.file.mimetype), "") + "_out." + mime.extension(req.file.mimetype)
            }
            console.log(imgData);
            res.render('index', imgData);
        });
  
    }
}

module.exports = controller;
