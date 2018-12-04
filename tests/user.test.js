const reset = require('../database/environment').reset;
const user = require('../resources/user');

reset();

// Testing get_user_byId //

	// Test con id non validi:
// test('Not integer id - get /:id', () => {
	// expect(user.test_get_user_byId(1.1)).toBe(null);
// });

test('Id less than 0 - get /:id', () => {
	expect(user.test_get_user_byId(-1)).toBe(null);
});

test('Id is not a number - get /:id', () => {
	expect(user.test_get_user_byId('wrong')).toBe(null);
});

	// Test con id validi:
test('Valid id - get /:id', () => {
	expect(user.test_get_user_byId(1)).toBeDefined;
});

test('Not such a user - get /:id', () => {
	expect(user.test_get_user_byId(0)).toBe(false);
});


// Testing delete_user_byId //
	
	// Test con id non validi:
// test('Not integer id - delete /:id', () => {
	// expect(user.test_delete_user_byId(1.1)).toBe(null);
// });

test('Id less than 0 - delete /:id', () => {
	expect(user.test_delete_user_byId(-1)).toBe(null);
});

test('Id is not a number - delete /:id', () => {
	expect(user.test_delete_user_byId('wrong')).toBe(null);
});

// Test con id validi:
test('Valid id - delete /:id', () => {
	expect(user.test_delete_user_byId(2)).toBe(true);
});

test('Not such a user - delete /:id', () => {
	expect(user.test_delete_user_byId(0)).toBe(false);
});


// Testing get_users //

test('Get all users, valid - get /', () => {
	var users = user.test_get_users();
	expect(Array.isArray(users)).toBe(true);
});


// Testing create_user

test('Creation of user, valid - post /', () => {
	var users_before = user.test_get_users();
	var users_after = null;
	
	var us =
	{
		id: 0,
		username: "username_test",
		email: "email_test",
		password: "password_test"
	}
	
	expect(user.test_create_user(us)).toBe(true);
	
	users_after = user.test_get_users();
	
	expect(users_after.length).toEqual(users_before.length + 1);
});

// This can be done with any of the four requested parameters
test('Undefined id in user creation, not valid - post /', () => {
	var users_before = user.test_get_users();
	var users_after = null;
	
	var us =
	{
		username: "username_test",
		email: "email_test",
		password: "password_test"
	}
	
	expect(user.test_create_user(us)).toBe(false);
	
	users_after = user.test_get_users();
	
	expect(users_after.length).toEqual(users_before.length);
});


// Testing update_user

test('Update of user, valid - put /', () => {
	var users_before = user.test_get_users();
	var users_after = null;
	var right = false;
	
	var us =
	{
		id: 1,
		username: "username_test",
		email: "email_test",
		password: "password_test"
	}
	
	expect(user.test_update_user(us)).toBe(true);
	
	users_after = user.test_get_users();
	
	expect(users_after.length).toEqual(users_before.length);
	
	
	for (var i in users_after) {
		if ((us.id === users_after[i].id) &&
			(us.username === users_after[i].username) &&
			(us.email === users_after[i].email) &&
			(us.password === users_after[i].password)) {
				
				right = true;
		}
	}
	
	expect(right).toBe(true);
});

test('Undefined username in user update - put /', () => {
	var users_before = user.test_get_users();
	var users_after = null;
	
	var us =
	{
		id: 1,
		email: "email_test",
		password: "password_test"
	}
	
	expect(user.test_update_user(us)).toBe(false);
	
	users_after = user.test_get_users();
	
	expect(users_after.length).toEqual(users_before.length);
});

test('User to update not found - put /', () => {
	var users_before = user.test_get_users();
	var users_after = null;
	
	var us =
	{
		id: users_before.length + 1,
		username: "username_test",
		email: "email_test",
		password: "password_test"
	}
	
	expect(user.test_update_user(us)).toBe(false);
	
	users_after = user.test_get_users();
	
	expect(users_after.length).toEqual(users_before.length);
});







