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
		var w = true;
		for(let i = 0; i < session_offered.length; i++) { {
			if (session_offered[l].idSession == req.params.idSession) {
				w = false;
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
		var y = true;
		for(let i = 0; i <  session_offered.length; i++) { {
			if (session_offered[l].idSession == req.params.idSession) {
				y = false;
			}
		}
		if (y == false) {
			session_offered.splice(l, 1);
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
		var f = true;
		for(let i = 0; i < session_offered.length; i++) {
			if (session_offered[l].idSession == req.params.idSession) {
				f = false;
			}
		}
		if (f == false) {
			res.json(session_offered[l].exams);
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
		var g = true;
		for(let i = 0; i < session_offered.length; i++) {
			if (session_offered[l].idSession == req.params.idSession) {
				g = false;
			}
		}
		if (g == false) {
			session_offered[l] = {idSession:req.params.idSession, exams:req.params.exams};
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
		var a = true;
		for(let i = 0; i <  session_offered.length; i++) {
			if (session_offered[l].idSession == idSession) {
				a = false;
			}
		}
		if (a == true) {
			session_offered[l] = {idSession:idSession, exams:exams};
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
		var b = true;
		for(let i = 0; i < session_offered.length; i++) {
			if (session_offered[l].idSession == idSession) {
				b = false;
			}
		}
		if (b == false) {
			session_offered.splice(l, 1);
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
		var c = true;
		for(let i = 0; i < session_offered.length; i++) {
			if (session_offered[l].idSession == idSession) {
				c = false;
			}
		}
		if (c == false) {
			return session_offered[l].exams;
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
		var d = true;
		for(let i = 0; i <  session_offered.length; i++) {
			if (session_offered[l].idSession == idSession) {
				d = false;
				break;
			}
		}
		if (d == false) {
			session_offered[l] = {idSession:idSession, exams:exams};
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
