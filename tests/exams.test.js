const exam = require('../JS/examFunctions').getExams;
const examId = require('../JS/examFunctions').getExamsById;
const userId = require('../JS/examFunctions').getExamsByUserId;
const examPut = require('../JS/examFunctions').putExam;
const examUpdate = require('../JS/examFunctions').updateExam;
const examDelete = require('../JS/examFunctions').deleteExam;
const empty = require('../JS/examFunctions').isEmpty;

test('return exams correctly', () => {
    expect(exam()).toBeDefined();
    expect(exam()).not.toBeNull();
})

test('idExam correct', () => {
    expect(examId(1)).toBeDefined();
    expect(examId(1)).not.toBeNull();
})

test('idExam incorrect', () => {
    expect(examId("a")).toBeNull();
    expect(examId(-1)).toBeNull();
})

test('idUser correct', () => {
    expect(userId(1)).toBeDefined();
    expect(userId(1)).not.toBeNull();
})

test('idUser incorrect', () => {
    expect(userId("a")).toBeNull();
    expect(userId(-1)).toBeNull();
})

test('put the exam', () => {
    expect(examPut()).toBeTruthy();
})

test('update the exam correctly', () => {
    expect(examUpdate(1)).toBeTruthy();
})

test('update the exam not correctly', () => {
    expect(examUpdate("a")).toBeNull();
    expect(examUpdate(-1)).toBeNull();
})

test('delete the exam correctly', () => {
    expect(examDelete(1)).toBeTruthy();
})

test('delete the exam not correctly', () => {
    expect(examDelete("a")).toBeNull();
    expect(examDelete(-1)).toBeNull();
})

test('check if a object is empty', () => {
    expect(empty({})).toBeTruthy();
    expect(empty({ "a": "a" })).toBeFalsy;
})