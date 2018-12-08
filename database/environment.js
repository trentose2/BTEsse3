var fs = require('fs');
const FAKE_DB_PATH = './database/users.json';

var users = [
	{
		"id": 1,
		"username": "username1",
		"firstName":"firstName1",
		"lastName":"lastName1",
		"email": "email1",
		"password": "password1",
		"phone":"phone1"
	},
	{
		"id": 2,
		"username": "username2",
		"firstName":"firstName2",
		"lastName":"lastName2",
		"email": "email2",
		"password": "password2",
		"phone":"phone2"
	}
]

function read_data() {
	return JSON.parse(fs.readFileSync(FAKE_DB_PATH, 'utf8'));
}

function write_data(users) {
	fs.writeFileSync(FAKE_DB_PATH, JSON.stringify(users));
}

function reset_users() {
	write_data(users);
}

module.exports = {
	read: read_data,
	write: write_data,
	reset: reset_users
};

reset_users();
