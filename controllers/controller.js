const {spawn} = require('child_process');
const fs = require('fs');
const scriptPath = './public/js/script.py';
const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
        res.render('index');
    },

    postQueue: function (req, res) {
        //console.log(req);
        res.redirect('/');
    },

    postUpload: function (req, res) {
        //console.log(req);

        let url = /*URL.createObjectURL(file)*/ '';
        var imgOutput = {
            imgURL: url
        }

        res.send("Hello");
        /* var dataToSend;
        const python = spawn('python', [scriptPath]);

        python.stdout.on('data', function (data) {
            console.log("Executing py.");
            dataToSend = data.toString();
            //console.log(dataToSend);
        });

        python.on('close', (code) => {
            console.log('Python process terminated.');
            console.log(dataToSend);
        }); */


    }
}

module.exports = controller;
