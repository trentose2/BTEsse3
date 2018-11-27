const session_offered  = require ('/.session_offered')
//POST, /sessionExams
function create_session(idSession, exams){
		const index = session_offered.findIndex((item) => {return item.id===idSession})
		if (index===-1 && exam !== null) {
			session_offered[index] ={idSession, exams}
			return 200
		} else {
			return 404
    	
    		}
}
 
 //DELETE, /sessionExam/{idSession}
function delete_session(idSession){
	const index = session_offered.findIndex((item) => {return item.id===idSession})
		if (index===-1) {
			return 404
		} else {
			session_offered.splice(index,1)
			return 200
//GET, /sessionExams
function get_sessions() {
    if (session_offered !== null) {
    	return session_offered
    } else {
	return 404   	
}}
	
//GET,/sessionExams/{idSession} 
function get_session_by_id (idSession) {
 	const index = session_offered.findIndex((item) => {return item.id===idSession})
		if (index!==-1) {
			return session_offered[index].exams
		    }else {
			 return 404
			
		    }
		}
}
  
//PUT,/sessionExams 
function put_session(idSession, exams) {
	const index = session_offered.findIndex((item) => {return item.id===idSession})
	if (index!==-1 && exams !== null) {
		session_offered[index] ={idSession, exams}
		return 200
	} else {
		return 404
	}			
}
			
module export = {put_session,
		get_session_by_id,
		get_sessions,
		delete_session,
		create_session}
