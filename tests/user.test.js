const user = require('../resources/user');
const reset = require('../database/environment').reset;

reset();

// Testing get_user_byId //

	// Test con id non validi:
test('Not integer id - get', () => {
	expect(user.test_get_user_byId(1.1)).toBe(null);
});

test('Id less than 0 - get', () => {
	expect(user.test_get_user_byId(-1)).toBe(null);
});

test('Id is not a number - get', () => {
	expect(user.test_get_user_byId('wrong')).toBe(null);
});

	// Test con id validi:
test('Valid id - get', () => {
	expect(user.test_get_user_byId(1)).toBeDefined;
});

test('Not such a user - get', () => {
	expect(user.test_get_user_byId(0)).toBe(false);
});


// Testing delete_user_byId //
	
	// Test con id non validi:
test('Not integer id - delete', () => {
	expect(user.test_delete_user_byId(1.1)).toBe(null);
});

test('Id less than 0 - delete', () => {
	expect(user.test_delete_user_byId(-1)).toBe(null);
});

test('Id is not a number - delete', () => {
	expect(user.test_delete_user_byId('wrong')).toBe(null);
});

// Test con id validi:
test('Valid id - delete', () => {
	expect(user.test_delete_user_byId(2)).toBe(true);
});

test('Not such a user - delete', () => {
	expect(user.test_delete_user_byId(0)).toBe(false);
});

