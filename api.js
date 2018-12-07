const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

var exams = require('./resources/exams');
var submissions = require('./resources/submissions');
var users = require('./resources/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Welcome to BTESSE3'));

app.use('/', exams);
app.use('/', submissions);
app.use('/users', users);

app.get('/', (req, res) => res.send('Hello Word!'));

app.listen(PORT, () => console.log('Example app listening on port ' + PORT));

module.exports = app;

