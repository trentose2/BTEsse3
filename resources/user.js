const func = require('../res_functions/user_functions');
const express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	var users = func.get_users();
	
	if ((users === undefined) || (users === null)) {
		res.statusCode = 400;
		return res.json({ message: "Something went wrong retrieving the users" });
	}
	
	res.statusCode = 200;
	return res.json(users);
});

router.post('/', function(req, res) {
	var op = func.create_user(req.body);
	
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
	var op = func.update_user(req.body);
	
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
	var user = func.get_user_byId(req.params.id);
	
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
	var op = func.delete_user_byId(req.params.id);
	
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


