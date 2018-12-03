var fs = require('fs');
const express = require('express');
const FAKE_DB_PATH = './database/users.json'
var router = express.Router();
// var bodyParser = require('body-parser');

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
	var users = get_users();
	
	if ((users === undefined) || (users === null)) {
		users = [];
	}
	
	res.statusCode = 200;
	return res.json(users);
});

router.get('/:id', function(req, res) {
	var user = get_user_byId(req.params.id);
	
	if ((user === undefined) || (user === null)) {
		res.statusCode = 404;
		return res.json({message:'Error, Not Found!'});
	}
	else {
		res.statusCode = 200;
		return res.json(user);
	}
});

router.delete('/:id', function(req, res) {
	// var user = get_user_byId(req.params.id);
	return null
	
});

function read_data() {
	return JSON.parse(fs.readFileSync(FAKE_DB_PATH, 'utf8'));
}

function write_data(users) {
	fs.writeFileSync(FAKE_DB_PATH, JSON.stringify(users));
}

function get_users() {
	return read_data();
}

function create_user() {
	var users = read_data();
	var new_id = -1;
	
	for (var i in users) {
		if (users[i].id == id) {
			// console.log('\t', users[i]);
			return users[i];
		}
	}
	while (new_id == 0) {
		i
	}
}

function get_user_byId(id) {
	var users = read_data();
	
	console.log('is id integer? ', Number.isInteger(id));
	
	// (!Number.isInteger(id)) || 
	if ((id < 0) || (isNaN(id))) {
		// console.log('not integer, apparently');
		return null;
	}
	
	for (var i in users) {
		if (users[i].id == id) {
			// console.log('\t', users[i]);
			return users[i];
		}
	}
	return false;
}

function delete_user_byId(id) {
	var users = read_data();
	
	if ((!Number.isInteger(id)) || (id < 0) || (isNaN(id))) {
		return null;
	}
	
	var result = false;
	var l = users.length;
	
	for (var i in users) {
		if (users[i].id == id) {
			users.splice(i, 1);
			result = true;
		}
	}
	
	return result;
}

router.test_get_user_byId = get_user_byId;
router.test_delete_user_byId = delete_user_byId;

module.exports = router;








