const express = require('express');
const controller = require('../controllers/controller.js');
const multer = require('multer');
const upload = multer({ dest: './public/uploads/' })
const app = express();

app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);
app.post('/queue', controller.postQueue);
app.post('/upload', upload.single('imgInput'), controller.postUpload);

module.exports = app;