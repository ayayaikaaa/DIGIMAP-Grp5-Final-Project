const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const routes = require('./routes/routes.js');
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', routes);

app.use(function (req, res) {
	var details = {
		title: '404',
		subtitle: 'An error has occured.'
	}
    res.render('error', details);
});

app.listen(port, hostname, function(){
	console.log('Server running at:');
	console.log('http://' + hostname + ':' + port);
});