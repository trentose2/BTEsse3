const read_data = require('../database/environment').read;
const write_data = require('../database/environment').write;
const express = require('express');
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
	
	if ((user === undefined) || (user === null) || (!user)) {
		res.statusCode = 404;
		return res.json({message:'Error, User Not Found!'});
	}
	else {
		res.statusCode = 200;
		return res.json(user);
	}
});


// sistema
router.delete('/:id', function(req, res) {
	// var user = get_user_byId(req.params.id);
	return null
	
});

// casi di test?
function get_users() {
	return read_data();
}

// sistema
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

// chiedi, controllo con Number.isInteger non va se id è preso da url
function get_user_byId(id) {
	var users = read_data();
	
	// console.log('is id integer? ', Number.isInteger(id));
	
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

// ci sarà lo stesso errore di get_user_byId
function delete_user_byId(id) {
	var users = read_data();
	
	if ((!Number.isInteger(id)) || (id < 0) || (isNaN(id))) {
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

router.test_get_user_byId = get_user_byId;
router.test_delete_user_byId = delete_user_byId;

module.exports = router;








