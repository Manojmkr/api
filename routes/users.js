var express = require('express');
var mongoose = require('mongoose');
var config = require('../config/database');
var User = require('../model/user');


var app = express();
var router = express.Router();


mongoose.connect(config.database);
app.set('superSecret', config.secret);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function (req, res, next) {
	var userinfo = new User({
		"name": req.body.name,
		"password": req.body.password
	});
	userinfo.save(function (err, Asignup) {
		if (err) return JSON.stringify(err);
		if (Asignup) {

			res.send({ status: true, message: "success" })

		} else {

			res.send({ status: false, message: "Failure" })
		}
	})
});

module.exports = router;
