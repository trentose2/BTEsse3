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
    expect(examPut("{\"idExam\": 4,\"idUser\": 2,\"nameExam\": \"new\",\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}")).toBeTruthy();
})

test('update the exam correctly', () => {
    expect(examUpdate(1, "{\"idExam\": 4,\"idUser\": 2,\"nameExam\": \"new\",\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}")).toBeTruthy();
})

test('update the exam not correctly', () => {
    expect(examUpdate("a", "{\"idExam\": 4,\"idUser\": 2,\"nameExam\": \"new\",\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}")).toBeNull();
    expect(examUpdate(-1, "{\"idExam\": 4,\"idUser\": 2,\"nameExam\": \"new\",\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}")).toBeNull();
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