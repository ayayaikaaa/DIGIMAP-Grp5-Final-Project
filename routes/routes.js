const express = require('express');
const controller = require('../controllers/controller.js');
const multer = require('multer');
const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
const upload = multer({ storage: storage });

app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);
app.post('/queue', controller.postQueue);
app.post('/upload', upload.single('imgInput'), controller.postUpload);

module.exports = app;