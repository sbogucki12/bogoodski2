const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/config');
require('./models/FormData');
require('./models/writingsSchema');
var bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

const app = express();

const FormMessage = mongoose.model('formMessages');
const Writings = mongoose.model('writings');

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

	// intercept OPTIONS method
	if ('OPTIONS' == req.method) {
		res.send(200);
	} else {
		next();
	}
};

app.use(allowCrossDomain);
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());



app.post('/submitMessage', (req, res) => {
	var newMessage = new FormMessage(req.body);
	newMessage
		.save()
		.then(item => {
			res.status(200).send();
		})
		.catch(err => {
			res.status(400).send();
		});
});

app.get('/writings', function(req, res) {
	Writings.find({}, function(err, writings) {
		res.send(writings);
	});
});

app.use(express.static('client/build'));

const path = require('path');
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
