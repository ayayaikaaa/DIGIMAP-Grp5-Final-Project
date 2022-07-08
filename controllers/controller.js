const { spawn } = require("child_process");
const mime = require('mime-types');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });
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
        console.log("FILE",req.file);
        const inf = require('child_process').exec('python ./Real-ESRGAN/inference_realesrgan.py -i ./public/uploads/' + req.file.filename + ' -s 3.5 -o ./public/output/ --ext png --fp32')
        console.log("PROCESSING");

        inf.stdout.pipe(process.stdout);

        inf.on('exit', function () {
            var imgFilename = (req.file.filename).replace(/.jpg/g, ".jpeg");
            var imgOutput = "./output/" + imgFilename.replace("." + mime.extension(req.file.mimetype), "") + "_out.png";
            res.send(imgOutput);
        });
    }
}

module.exports = controller;
