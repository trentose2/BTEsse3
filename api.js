const express = require('express');
const app = express();
var fs = require("fs");
const PORT = process.env.PORT || 3000;

var exams = require('./resources/exams');
var submissions = require('./resources/submissions');

app.get('/', (req, res) => res.send('Welcome to BTESSE3'));
app.use('/', exams);
app.use('/', submissions);

var get_user_byId = require('./resources/user').get_user_byId;
var delete_user_byId = require('./resources/user').delete_user_byId;

app.get('/users/:id', function (req, res) {
	const result = get_user_byId(req.params.id);
	res.end(JSON.stringify(result));
});

app.delete('/users/:id', function (req, res) {
	const result = delete_user_byId(req.params.id);
	res.send(result);
});

app.listen(PORT, () => console.log('Example app listening on port' + PORT));