const submissions = require('../JS/submissionFunctions').getExamsSubmission;
const submissionId = require('../JS/submissionFunctions').getExamsSubmissionById;
const submit = require('../JS/submissionFunctions').submission;
const submissionUpdate = require('../JS/submissionFunctions').updateSubmissions;
const submissionDelete = require('../JS/submissionFunctions').deleteSubmission;
const fetch = require('node-fetch');

test('return submissions correctly', () => {
    expect(submissions()).toBeDefined();
    expect(submissions()).not.toBeNull();
})

test('idSubmission correct', () => {
    expect(submissionId(1)).toBeDefined();
    expect(submissionId(1)).not.toBeNull();
})

test('idSubmission incorrect', () => {
    expect(submissionId("a")).toBeNull();
    expect(submissionId(-1)).toBeNull();
})

test('submit the exam', () => {
    expect(submit("{\"id\": 4,\"idUser\": 2,\"exam\": {\"nameExam\": \"new\",\"idExam\": 4,\"idUser\": 2,\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}}")).toBeTruthy();
})

test('update the submission correctly', () => {
    expect(submissionUpdate(1, "{\"id\": 4,\"idUser\": 2,\"exam\": {\"nameExam\": \"new\",\"idExam\": 4,\"idUser\": 2,\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}}")).toBeTruthy();
})

test('update the submission not correctly', () => {
    expect(submissionUpdate("a", "{\"id\": 4,\"idUser\": 2,\"exam\": {\"nameExam\": \"new\",\"idExam\": 4,\"idUser\": 2,\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}}")).toBeNull();
    expect(submissionUpdate(-1, "{\"id\": 4,\"idUser\": 2,\"exam\": {\"nameExam\": \"new\",\"idExam\": 4,\"idUser\": 2,\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}}")).toBeNull();
})

test('delete the submission correctly', () => {
    expect(submissionDelete(1)).toBeTruthy();
})

test('delete the submission not correctly', () => {
    expect(submissionDelete("a")).toBeNull();
    expect(submissionDelete(-1)).toBeNull();
})

async function getAllTheSubmissions() {
    var res = await fetch('https://btesse3.herokuapp.com/submissions');
    return (await res.json());
}

async function getTheSubmissionById(id) {
    var res = await fetch('https://btesse3.herokuapp.com/submissions/' + id);
    return (await res.json());
}

test('check get all the submissions', async () => {
    var result = await getAllTheSubmissions();
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
});

test('check get the submission by id', async () => {
    var result = await getTheSubmissionById(1);
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
});