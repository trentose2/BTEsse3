const put_session = require('/.session.js').put_session
const get_session_by_id = require('/.session.js').get_session_by_id
const get_sessions = require('/.session.js').get_sessions
const delete_session = require('/.session.js').delete_session
const create_session = require('/.session.js').create_session

var session_offered = [{idSession:23, exams: [{nameExam:'prova1', idExam:74},{nameExam:'prova2',idExam:12}]},
                       {idSession:28, exams: [{nameExam:'prova2', idExam:72},{nameExam:'prova3',idExam:91}]}]

//DELETE tests (to delete a session)
test('test if session number 23 is deleted successfully', () => {
    delete_session(23)
    expect(delete_session(23)).toBe(200)
});
test('test if session number 23 is deleted for sure', () => {
    delete_session(23)
    put_session(23, {nameExam:'prova5', 4})
    expect(put_session(23,{nameExam:'prova5', 4})).toBe(404)
});
test('test if delete accepts only positive integer value of idSession', () => {
    delete_session('abcd')
    expect(delete_session('abcd')).toBe(404)
});
test('test if delete accepts only positive integer value of idSession', () => {
    delete_session(-12)
    expect(delete_session(-12)).toBe(404)
});
test('test if i uses a idSession that does not exist, delete send error', () => {
    delete_session(77)
    expect(delete_session(77)).toBe(404)
});

//GET tests (to return all the sessions)
test('test if the array of all the session is empty, then GET failed (after delete the only 2 sessions in the array)', () => {
    delete_session(23)
    delete_session(28)
    get_sessions()
    expect(get_sessions()).toBe(404)
});

//POST test (to create a session)
test('test if post accepts only positive integer value of idSession', () => {
    create_session('efgh', {nameExam:'prova5', 4})
    expect(create_session('efgh', {nameExam:'prova5', 4})).toBe(404)
});
test('test if post accepts only positive integer value of idSession', () => {
    create_session(-45,{nameExam:'prova5', 4})
    expect(create_session(-45, {nameExam:'prova5', 4})).toBe(404)
});
test('test that if exam is empty, post send error', () => {
    create_session(56, '')
    expect(delete_session(56,'')).toBe(404)
});
test('test that if you want to create a new session with an idSession that already exist, post send error', () => {
    create_session(23,{nameExam:'prova5', 4})
    expect(create_session(23,{nameExam:'prova5', 4})).toBe(404)
});
test('test if a session is created correctly', () => {
    create_session(67,{nameExam:'prova5', 4})
    put_session(67,{nameExam:'prova7', 8})
    expect(put_session(67)).toBe(200)
});
test('test if a session is created', () => {
    create_session(67,{nameExam:'prova5', 4})
    expect(create_session(67)).toBe(200)
});

//PUT tests (to upload a session)
test('test if put accepts only positive integer value of idSession', () => {
    put_session('xyz', {nameExam:'prova5', 4})
    expect(put_session('xyz', {nameExam:'prova5', 4})).toBe(404)
});
test('test if put accepts only positive integer value of idSession', () => {
    put_session(-45,{nameExam:'prova5', 4})
    expect(put_session(-45, {nameExam:'prova5', 4})).toBe(404)
});
test('test that if exam is empty, put send error', () => {
    put_session(23, '')
    expect(put_session(23,'')).toBe(404)
});
test('test that if put works', () => {
    put_session(23, {nameExam:'prova5', 4})
    expect(put_session(23,{nameExam:'prova5', 4})).toBe(200)
});
test('test that if i use a idSession that does not exists, put send error', () => {
    put_session(95, {nameExam:'prova5', 4})
    expect(put_session(95,{nameExam:'prova5', 4})).toBe(404)
});

//GET, {idSession} tests (to return the exams of a session by id)
test('test if get accepts only positive integer value of idSession', () => {
    get_session_by_id('ijkl')
    expect(get_session_by_id('ijkl')).toBe(404)
});
test('test if put accepts only positive integer value of idSession', () => {
    get_session_by_id(-4)
    expect(get_session_by_id(-4)).toBe(404)
});
test('test that if i use an idSession that does not exist, get send me error', () => {
    get_session_by_id(32)
    expect(get_session_by_id(32).toBe(404)
});
