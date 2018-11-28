const examId = require('../resources/exams').examId;
const userId = require('../resources/exams').userId;
const examPut = require('../resources/exams').examPut;
const examUpdate = require('../resources/exams').examUpdate;
const examDelete = require('../resources/exams').examDelete;
const submit = require('../resources/exams').submit;

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

test('submit the exam', () => {
    expect(submit()).toBeTruthy();
})