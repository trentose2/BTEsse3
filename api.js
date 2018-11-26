const express = require('express');
const app = express();
var fs = require("fs");
const PORT = process.env.PORT || 3000;
var myData = {};
readFile(async function (err, data) {
    myData = JSON.parse(data);
});
var myDataSubmission = {};
fs.readFile(__dirname + "/" + "submissions.json", "utf8", async function (err, data) {
    myDataSubmission = JSON.parse(data);
});

var exam4 = {
    "idExam": 4,
    "idUser": 1,
    "nameExam": "esempio4",
    "valutation": 1,
    "tasks": [{
        "id": 1,
        "type": "open",
        "request": "domanda",
        "response": "risposta",
        "reviews": [{
            "idReview": 1,
            "idUser": 1,
            "idTask": 1,
            "message": "es4",
            "mark": 1
        }]
    }]
};

var exam2 = {
    "idExam": 2,
    "idUser": 1,
    "nameExam": "esempio2new",
    "valutation": 1,
    "tasks": [{
        "id": 1,
        "type": "open",
        "request": "domanda",
        "response": "risposta",
        "reviews": [{
            "idReview": 1,
            "idUser": 2,
            "idTask": 1,
            "message": "es2new",
            "mark": 1
        }]
    }]
};

var submission4 = {
    "id": 4,
    "idUser": 2,
    "exam": {
        "nameExam": "es4",
        "idExam": 2,
        "idUser": 2,
        "valutation": 1,
        "tasks": [
            {
                "id": 1,
                "type": "open",
                "request": "domanda",
                "response": "risposta",
                "reviews": [
                    {
                        "idReview": 1,
                        "idUser": 1,
                        "idTask": 1,
                        "message": "es4",
                        "mark": 1
                    }
                ]
            }
        ]
    }
};

app.get('/', (req, res) => res.send('Hello Word!'));

app.get('/exams', function (req, res) {
    res.end(JSON.stringify(myData));
});

app.get('/exams/idUser/:idUser', function (req, res) {
    const result = getExamsByUserId(req.params.idUser);
    res.end(JSON.stringify(result));
});

app.get('/exams/:id', function (req, res) {
    const result = getExamsById(req.params.id);
    res.end(JSON.stringify(result));
});

app.put('/exams', function (req, res) {
    const result = putExam();
    res.end(JSON.stringify(myData));
});

app.post('/exams', function (req, res) {
    const result = updateExam();
    res.end(JSON.stringify(myData));
});

app.delete('/exams/:id', function (req, res) {
    const result = deleteExam(req.params.id);
    res.end(JSON.stringify(myData));
});

app.get('/submissions', function (req, res) {
    res.end(JSON.stringify(myDataSubmission));
});

app.post('/submissions', function (req, res) {
    const result = submission();
    res.end(JSON.stringify(myDataSubmission));
});

app.listen(PORT, () => console.log('Example app listening on port' + PORT));

function readFile(cb) {
    fs.readFile(__dirname + "/" + "exams.json", "utf8", cb);
}

function getExamsById(id) {
    var Exam = {};
    for (var x in myData) {
        if (myData[x].idExam == id) {
            Exam = myData[x];
        }
    }
    return(Exam);
}

function getExamsByUserId(idUser) {
    var Exam = [];
    for (var x in myData) {
        if (myData[x].idUser == idUser) {
            Exam.push(myData[x]);
        }
    }
    return(Exam);
}

function putExam() {
    myData.push(exam4);
    return true;
}

function updateExam() {
    for (var x in myData) {
        if (myData[x].idExam == 2) {
            myData[x] = exam2;
        }
    }
    return(true);
}

function deleteExam(id) {
    for (var x in myData) {
        if (myData[x].idExam == id) {
            delete myData[x];
        }
    }
    return(true);
}

function submission() {
    myDataSubmission.push(submission4);
    return true;
}