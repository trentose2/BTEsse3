const express = require('express');
const router = express.Router();
const ex = require('../JS/examFunctions');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/exams', function (req, res) {
    const result = ex.getExams();
    if (result == null) {
        res.sendStatus(404);
    }
    else {
        res.end(JSON.stringify(result));
    }
});

router.get('/exams/idUser/:idUser', function (req, res) {
    const result = ex.getExamsByUserId(req.params.idUser);
    if (result == null) {
        res.sendStatus(404);
    }
    else {
        res.end(JSON.stringify(result));
    }
});

router.get('/exams/:id', function (req, res) {
    const result = ex.getExamsById(req.params.id);
    if (result == null) {
        res.sendStatus(404);
    }
    else {
        res.end(JSON.stringify(result));
    }
});

router.put('/exams/:id', function (req, res) {
    const result = ex.updateExam(req.params.id, JSON.stringify(req.body));
    if (result == true) {
        res.end(JSON.stringify(ex.getExams()));
    }
    else {
        res.sendStatus(404);
    }
});

router.post('/exams', function (req, res) {
    const result = ex.putExam(JSON.stringify(req.body));
    if (result == true) {
        res.end(JSON.stringify(ex.getExams()));
    }
    else {
        res.sendStatus(500);
    }
});

router.delete('/exams/:id', function (req, res) {
    const result = ex.deleteExam(req.params.id);
    if (result == true) {
        res.end(JSON.stringify(ex.getExams()));
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;