var fs = require('fs');
const express = require('express');
const FAKE_DB_PATH = './database/users.json'
var router = express.Router();

var users = [];

function read_data() {
	return JSON.parse(fs.readFileSync('./database/users.json', 'utf8'));
}

function get_user_byId(id) {
	users = read_data();
	
	if ((!Number.isInteger(id)) || (id < 0) || (isNaN(id))) {
		return null;
	}
	
	users.forEach((element) => {
		if (element.id == id) {
			return element;
		}
	});
	return false;
}

function delete_user_byId(id) {
	users = read_data();
	
	if ((!Number.isInteger(id)) || (id < 0) || (isNaN(id))) {
		return null;
	}
	
	var result = false;
	var l = users.length;
	
	for (var x in users) {
		if (users[x].id == id) {
			users.splice(x, 1);
			result = true;
		}
	}
	
	return result;
}

router.test_get_user_byId = get_user_byId;
router.test_delete_user_byId = delete_user_byId;

module.exports = router;
