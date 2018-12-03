const get_user_byId = require('../resources/user').get_user_byId;
const delete_user_byId = require('../resources/user').delete_user_byId;

// Testing get_user_byId //

	// Test con id non validi:
test('Not integer id - get', () => {
	expect(get_user_byId(1.1)).toBe(null);
});

test('Id less than 0 - get', () => {
	expect(get_user_byId(-1)).toBe(null);
});

test('Id is not a number - get', () => {
	expect(get_user_byId('wrong')).toBe(null);
});

	// Test con id validi:
test('Valid id - get', () => {
	expect(get_user_byId(11)).toBeDefined;
});

test('Not such a user - get', () => {
	expect(get_user_byId(0)).toBe(false);
});


// Testing delete_user_byId //
	
	// Test con id non validi:
test('Not integer id - delete', () => {
	expect(delete_user_byId(1.1)).toBe(null);
});

test('Id less than 0 - delete', () => {
	expect(delete_user_byId(-1)).toBe(null);
});

test('Id is not a number - delete', () => {
	expect(delete_user_byId('wrong')).toBe(null);
});

// Test con id validi:
test('Valid id - delete', () => {
	expect(delete_user_byId(11)).toBe(true);
});

test('Not such a user - delete', () => {
	expect(delete_user_byId(0)).toBe(false);
});
