var fs = require("fs");

var myDataSubmission = JSON.parse(fs.readFileSync(__dirname + "/" + "../database/submissions.json", 'utf8'));

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

function isEmpty(x) {
    for (const key in x) {
        if (x.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function getExamsSubmission() {
    if (isEmpty(myDataSubmission)) {
        return null;
    }
    else {
        return (myDataSubmission);
    }
}

function getExamsSubmissionById(id) {
    if (isNaN(id)) {
        return null;
    }
    else
        if (id < 0) {
            return null;
        }
        else {
            var sub = {};
            for (var x in myDataSubmission) {
                if (myDataSubmission[x].id == id) {
                    sub = myDataSubmission[x];
                }
            }
            if (isEmpty(sub)) {
                return null;
            }
            else {
                return (sub);
            }
        }
}

function submission() {
    myDataSubmission.push(submission4);
    return true;
}

function updateSubmissions(id) {
    if (isNaN(id)) {
        return null;
    }
    else
        if (id < 0) {
            return null;
        }
        else {
            for (var x in myDataSubmission) {
                if (myDataSubmission[x].id == id) {
                    myDataSubmission[x] = submission4;
                }
            }
            return (true);
        }
}

function deleteSubmission(id) {
    if (isNaN(id)) {
        return null;
    }
    else
        if (id < 0) {
            return null;
        }
        else {
            for (var x in myDataSubmission) {
                if (myDataSubmission[x].id == id) {
                    myDataSubmission.splice(x, 1);
                }
            }
            return (true);
        }
}

module.exports = {
    getExamsSubmission,
    getExamsSubmissionById,
    submission,
    updateSubmissions,
    deleteSubmission,
    isEmpty
}