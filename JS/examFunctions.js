var fs = require("fs");

var myData = JSON.parse(fs.readFileSync(__dirname + "/" + "../database/exams.json", 'utf8'));

/* ESEMPIO DI EXAM DA PASSARE COME BODY NEL CURL PER CREARE O AGGIORNARE
{\"idExam\": 4,\"idUser\": 2,\"nameExam\": \"new\",\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}
*/

function isEmpty(x) {
    for (const key in x) {
        if (x.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function getExams() {
    if (isEmpty(myData)) {
        return null;
    }
    else {
        return (myData);
    }
}

function getExamsById(id) {
    if (isNaN(id)) {
        return null;
    }
    else
        if (id < 0) {
            return null;
        }
        else {
            var Exam = {};
            for (var x in myData) {
                if (myData[x].idExam == id) {
                    Exam = myData[x];
                }
            }
            if (isEmpty(Exam)) {
                return null;
            }
            else {
                return (Exam);
            }
        }
}

function getExamsByUserId(idUser) {
    if (isNaN(idUser)) {
        return null;
    }
    else
        if (idUser < 0) {
            return null;
        }
        else {
            var Exam = [];
            for (var x in myData) {
                if (myData[x].idUser == idUser) {
                    Exam.push(myData[x]);
                }
            }
            if (isEmpty(Exam)) {
                return null;
            }
            else {
                return (Exam);
            }
        }
}

function putExam(exam) {
    myData.push(JSON.parse(exam));
    return true;
}

function updateExam(id, exam) {
    if (isNaN(id)) {
        return null;
    }
    else
        if (id < 0) {
            return null;
        }
        else {
            for (var x in myData) {
                if (myData[x].idExam == id) {
                    myData[x] = JSON.parse(exam);
                }
            }
            return (true);
        }
}

function deleteExam(id) {
    if (isNaN(id)) {
        return null;
    }
    else
        if (id < 0) {
            return null;
        }
        else {
            for (var x in myData) {
                if (myData[x].idExam == id) {
                    myData.splice(x, 1);
                }
            }
            return (true);
        }
}

module.exports = {
    getExams,
    getExamsById,
    getExamsByUserId,
    putExam,
    updateExam,
    deleteExam,
    isEmpty
}