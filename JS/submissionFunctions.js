var fs = require("fs");

var myDataSubmission = JSON.parse(fs.readFileSync(__dirname + "/" + "../database/submissions.json", 'utf8'));

/* ESEMPIO DI SUBMISSIONS DA PASSARE COME BODY NEL CURL PER CREARE O AGGIORNARE
{\"id\": 4,\"idUser\": 2,\"exam\": {\"nameExam\": \"new\",\"idExam\": 4,\"idUser\": 2,\"valutation\": 5,\"tasks\": [{\"id\": 1,\"type\": \"open\",\"request\": \"domanda\",\"response\": \"risposta\",\"reviews\": [{\"idReview\": 1,\"idUser\": 1,\"idTask\": 1,\"message\": \"es4\",\"mark\": 1}]}]}}
*/

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

function submission(sub) {
    myDataSubmission.push(JSON.parse(sub));
    return true;
}

function updateSubmissions(id, sub) {
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
                    myDataSubmission[x] = JSON.parse(sub);
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