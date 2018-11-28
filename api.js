const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const SOME_NUM = process.env.def || 40;

var session_offered = [{idSession:23, exams: [{nameExam:'prova1', idExam:74},{nameExam:'prova2',idExam:12}]},
                       {idSession:28, exams: [{nameExam:'prova2', idExam:74},{nameExam:'prova3',idExam:91}]}];



//POST, sessionExam
app.post('/sessionExams', (req, res) => {
    const new_idSession = req.body.idSession;
    const new_exams= req.body.exams;
    const new_session = [{idSession:91, exams: [{nameExam:prova5, idExam:47},{nameExam:prova6,idExam:22}]}];
    session_offered.push(new_session);
    //controllo se c'è la nuova sessione
    const index = session_offered.findIndex((item) => {return item.id===req.params.idSession});
    if (index!==-1) {
        res.sendstatus(200);
        res.json(new_session);
        console.log(session_offered);
		console.log('done');
	}else {
        res.status(404);
	}
 });
 //DELETE, /sessionExam/{idSession}
 app.delete('/sessionExams/:idSession', (req, res) => {
    const index = session_offered.findIndex((item) => {return item.id===req.params.idSession});
    if (index===-1) {
        res.sendstatus(404);
    } else {
	var count = 0;
    	for(i=0;i<session_offered.lenght;i++) { //controllo che sia unico
      		if (session_offered[l].id===req.params.idSession);
          	count++;
    	}
   	if (count >1) {
      	res.sendStatus(400);
	
    	} else {
	      session_offered.splice(index,1);
	      console.log('\ndeleting ',req.params.idSession);
	      console.log('now:',session_offered);
	      res.sendStatus(200);
	}}});

//GET, sessionExams
app.get('/sessionExams', (req, res) => {
    res.json(session_offered);
    res.sendStatus(200);
});

//GET,/sessionExams/{idSession}
app.get('/sessionExams/:idSession', (req,res) => {
      const index = session_offered.findIndex((item) => {return item.id===req.params.idSession});
      if (index ===-1) {
	      res.sendStatus(404);
      } else {
	      var c = session_offered.idSession;
	      for(i=0;i<c.exams.lenght;i++) {
        	res.json(c.exams);
	      }
      }
        res.sendStatus(200);
});
//PUT, /sessionExams
app.put('/sessionExams', (req, res) => {
    //controllo se c'è la sessione
    const index = session_offered.findIndex((item) => {return item.id===req.params.idSession});
    if (index===-1) {
	res.sendStatus(400);
    } else {
	const old_idSession = req.body.idSession;
    	const old_exams = req.body.exams;
	session_offered[index] ={old_idSession, old_exams};
        res.sendStatus(200);
        res.json(old_session);
	console.log(session_offered);
}});

//POST, /sessionExams
function create_session(idSession, exams){
		const index = session_offered.findIndex((item) => {return item.id===idSession});
		if (index===-1 && exam !== null) {
			session_offered[index] ={idSession, exams};
			return 200;
		} else {
			return 404;

    		}
}

 //DELETE, /sessionExam/{idSession}
function delete_session(idSession){
	const index = session_offered.findIndex((item) => {return item.id===idSession});
		if (index===-1) {
			return 404;
		} else {
			session_offered.splice(index,1);
			return 200;
		}
}
//GET, /sessionExams
function get_sessions() {
    if (session_offered !== null) {
    	return session_offered;
    } else {
	return 404;
}}

//GET,/sessionExams/{idSession}
function get_session_by_id (idSession) {
 	const index = session_offered.findIndex((item) => {return item.id===idSession});
		if (index!==-1) {
			return session_offered[index].exams;
		    }else {
			 return 404;

		    }
}

//PUT,/sessionExams
function put_session(idSession, exams) {
	const index = session_offered.findIndex((item) => {return item.id===idSession});
	if (index!==-1 && exams !== null) {
		session_offered[index] ={idSession, exams};
		return 200;
	} else {
		return 404;
	}
}

module export = {put_session,
		get_session_by_id,
		get_sessions,
		delete_session,
		create_session};
