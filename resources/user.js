const read_data = require('../database/environment').read;
const write_data = require('../database/environment').write;
const express = require('express');
var router = express.Router();

// 404 not found swagger
router.get('/', function(req, res) {
	var users = get_users();
	
	if ((users === undefined) || (users === null)) {
		users = [];
	}
	
	res.statusCode = 200;
	return res.json(users);
});

router.post('/', function(req, res) {
	var op = create_user(req.body);
	
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
	var op = update_user(req.body);
	
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
	var user = get_user_byId(req.params.id);
	
	if ((user === undefined) || (user === null) || (!user)) {
		res.statusCode = 404;
		return res.json({ message: "Error, User Not Found!" });
	}
	else {
		res.statusCode = 200;
		return res.json(user);
	}
});

// sistema unknown
router.delete('/:id', function(req, res) {
	var op = delete_user_byId(req.params.id);
	
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




function get_users() {
	return read_data();
}

function create_user(user) {
	var data = read_data();
	var retval = true;
	
	if (exist(user)) {
		user.id = data[data.length - 1].id + 1;
		data.push(user);
		write_data(data);
	}
	else {
		retval = false;
	}
	
	// console.log(data);
	
	return retval;
}

function update_user(user) {
	var data = read_data();
	var retval = false;
	
	if (exist(user)) {
		for (var i in data) {
			if (user.id === data[i].id) {
				data.splice(i, 1, user);
				write_data(data);
				retval = true;
			}
		}
	}
	
	// console.log(data);
	
	return retval;
}

// numero da 
function get_user_byId(id) {
	var users = read_data();
	
	// (!Number.isInteger(id)) || 
	if ((id < 0) || (isNaN(id))) {
		return null;
	}
	
	for (var i in users) {
		if (users[i].id == id) {
			return users[i];
		}
	}
	return false;
}
// stesso errore di get, e fixa test
function delete_user_byId(id) {
	var users = read_data();
	
	// (!Number.isInteger(id)) || 
	if ((id < 0) || (isNaN(id))) {
		return null;
	}
	
	for (var i in users) {
		if (users[i].id == id) {
			users.splice(i, 1);
			write_data(users);
			return true;
		}
	}
	return false;
}

function exist(user) {
	return user.id !== undefined && user.username !== undefined &&
		user.email !== undefined && user.password !== undefined;
}


router.test_get_users = get_users;
router.test_create_user = create_user;
router.test_update_user = update_user;
router.test_get_user_byId = get_user_byId;
router.test_delete_user_byId = delete_user_byId;

module.exports = router;








