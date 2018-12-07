const express = require('express');
const router = express.Router();
const ex = require('../JS/submissionFunctions');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/submissions', function (req, res) {
    const result = ex.getExamsSubmission();
    if (result == null) {
        res.sendStatus(404);
    }
    else {
        res.end(JSON.stringify(result));
    }
});

router.get('/submissions/:id', function (req, res) {
    const result = ex.getExamsSubmissionById(req.params.id);
    if (result == null) {
        res.sendStatus(404);
    }
    else {
        res.end(JSON.stringify(result));
    }
});

router.post('/submissions', function (req, res) {
    const result = ex.submission(JSON.stringify(req.body));
    if (result == true) {
        res.end(JSON.stringify(ex.getExamsSubmission()));
    }
    else {
        res.sendStatus(500);
    }
});

router.put('/submissions/:id', function (req, res) {
    const result = ex.updateSubmissions(req.params.id, JSON.stringify(req.body));
    if (result == true) {
        res.end(JSON.stringify(ex.getExamsSubmission()));
    }
    else {
        res.sendStatus(404);
    }
});

router.delete('/submissions/:id', function (req, res) {
    const result = ex.deleteSubmission(req.params.id);
    if (result == true) {
        res.end(JSON.stringify(ex.getExamsSubmission()));
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;