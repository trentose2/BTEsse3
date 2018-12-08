const write_data = require('../database/environment').write;
const read_data = require('../database/environment').read;
const express = require('express');
var router = express.Router();

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
	
	return retval;
}

function get_user_byId(id) {
	var users = read_data();
	
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

function delete_user_byId(id) {
	var users = read_data();
	
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


router.get_users = get_users;
router.create_user = create_user;
router.update_user = update_user;
router.get_user_byId = get_user_byId;
router.delete_user_byId = delete_user_byId;


module.exports = router;

