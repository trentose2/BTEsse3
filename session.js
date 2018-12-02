const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const SOME_NUM = process.env.def || 40;

var session_offered = [{ idSession: 23, exams: [{ nameExam: 'prova1', idExam: 74 }, { nameExam: 'prova2', idExam: 12 }] },
{ idSession: 28, exams: [{ nameExam: 'prova2', idExam: 74 }, { nameExam: 'prova3', idExam: 91 }] },
{ idSession: 32, exams: [{ nameExam: 'prova2', idExam: 74 }, { nameExam: 'prova3', idExam: 91 }] }];



//POST, sessionExam
router.post('/sessionExams/post', (req, res) => {
	if (isNaN(req.params.idSession) || req.params.idSession < 0 || req.params.exams == "") {
		res.sendStatus(400);
	} else {
		const new_session = {idSession:req.body.idSession, exams:req.body.exams};
		var w = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession !== req.params.idSession) {
				w = true;
			}
		}
		if (w == true) {
			session_offered.push(new_session);
			res.sendStatus(200);
		} else {
			res.sendStatus(404);
		}
	}
});
//DELETE, /sessionExam/{idSession}
router.delete('/sessionExams/del/:idSession', (req, res) => {
	if (isNaN(req.params.idSession) || req.params.idSession < 0) {
		res.sendStatus(400);
	} else {
		var y = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession == req.params.idSession) {
				y = true;
			}
		}
		if (y == true) {
			session_offered.splice(index, 1);
			res.sendStatus(200);
		} else {
			res.sendStatus(404);
		}

	}
});

//GET, sessionExams
router.get('/sessionExams', (req, res) => {
	res.json(session_offered);
	res.sendStatus(200);
});

//GET,/sessionExams/{idSession}
router.get('/sessionExams/:idSession', (req, res) => {
	if (isNaN(req.params.idSession) || req.params.idSession < 0) {
		res.sendStatus(404);
	} else {
		var y = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession == req.params.idSession) {
				y = true;
			}
		}
		if (y == true) {
			res.json(session_offered[x].exams);
			res.sendStatus(200);
		} else {
			res.sendStatus(404);
		}
	}
});
//PUT, /sessionExams
router.put('/sessionExams', (req, res) => {
	if (isNaN(req.params.idSession) || req.params.idSession < 0 || req.params.exams == "") {
		res.sendStatus(400);
	} else {
		var z = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession == req.params.idSession) {
				z = true;
			}
		}
		if (z == true) {
			session_offered[x] = {idSession:req.params.idSession, exams:req.params.exams};
			res.sendStatus(200);
		} else {
			res.sendStatus(404);
		}
	}
});

//POST, /sessionExams
function create_session(idSession, exams) {
	if (isNaN(idSession) || idSession < 0 || exams == "") {
		return 400;
	} else {
		var z = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession !== idSession) {
				z = true;
			}
		}
		if (z == true) {
			session_offered[x] = {idSession:idSession, exams:exams};
			return 200;
		} else {
			return 404;
		}
	}
}

//DELETE, /sessionExam/{idSession}
function delete_session(idSession) {
	if (isNaN(idSession) || idSession < 0) {
		return 400;
	} else {
		var z = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession == idSession) {
				z = true;
			}
		}
		if (z == true) {
			session_offered.splice(x, 1);
			return 200;
		} else {
			return 404;
		}
	}
}

//GET, /sessionExams
function get_sessions() {
	if (session_offered == "") {
		return 404;
	} else {
		return session_offered;
	}
}

//GET,/sessionExams/{idSession}
function get_session_by_id(idSession) {
	if (isNaN(idSession) || idSession < 0) {
		return 400;
	} else {
		var z = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession == idSession) {
				z = true;
			}
		}
		if (z == true) {
			return session_offered[x].exams;
		} else {
			return 404;
		}
	}
}

//PUT,/sessionExams
function put_session(idSession, exams) {
	if (isNaN(idSession) || idSession < 0 || exams == "") {
		return 400;
	} else {
		var z = false;
		for (var x in session_offered) {
			if (session_offered[x].idSession == idSession) {
				z = true;
			}
		}
		if (z == true) {
			session_offered[x] = {idSession:idSession, exams:exams};
			return 200;
		} else {
			return 404;
		}
	}
}

router.put_session = put_session;
router.get_session_by_id = get_session_by_id;
router.get_sessions = get_sessions;
router.delete_session = delete_session;
router.create_session = create_session;
module.exports = router;
