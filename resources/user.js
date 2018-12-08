const us = require('../JS/user_functions');
const express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var users = us.get_users();
	
	if ((users === undefined) || (users === null)) {
		res.statusCode = 400;
		return res.json({ message: "Something went wrong retrieving the users" });
	}
	
	res.statusCode = 200;
	return res.json(users);
});

router.post('/', function(req, res) {
	var op = us.create_user(req.body);
	
	if (!op) {
		res.statusCode = 400;
		return res.json({ message: "Error, creation of user went wrong." });
	}
	else {
		res.statusCode = 200;
		return res.json({ message: "User successfully created." });
	}	
});

router.put('/', function(req, res) {
	var op = us.update_user(req.body);
	
	if (!op) {
		res.statusCode = 404;
		return res.json({ message: "Error, user to update not found." });
	}
	else {
		res.statusCode = 200;
		return res.json({ message: "User successfully updated." });
	}
});

router.get('/:id', function(req, res) {
	var user = us.get_user_byId(req.params.id);
	
	if ((user === undefined) || (user === null) || (!user)) {
		res.statusCode = 404;
		return res.json({ message: "Error, User Not Found!" });
	}
	else {
		res.statusCode = 200;
		return res.json(user);
	}
});

router.delete('/:id', function(req, res) {
	var op = us.delete_user_byId(req.params.id);
	
	if ((op === undefined) || (op === null) || (!op)) {
		res.statusCode = 404;
		return res.json({ message: "Error, user not found." });
	}
	if (op) {
		res.statusCode = 200;
		return res.json({ message: "User successfully deleted." });
	}
	
	return res.json({ message: "Unknown error." });
});


module.exports = router;


