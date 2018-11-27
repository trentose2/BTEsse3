var fs = require('fs');
// var users = [];

// fs.readFile('./users.json', 'utf8', async function(err, data) {
	// console.log(data);
	// console.log(err);
	// users = JSON.parse(data);
// });

var users = [
	{"id": 11, "username": "username1", "email": "email1", "password": "password1"},
	{"id": 12, "username": "username2", "email": "email2", "password": "password2"}
];

function get_user_byId(id) {
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

module.exports = { get_user_byId, delete_user_byId };
