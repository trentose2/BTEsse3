const express = require('express');
const app = express();
var fs = require("fs");
const PORT = process.env.PORT || 3000;

var exams = require('./resources/exams');
var submissions = require('./resources/submissions');

app.get('/', (req, res) => res.send('Welcome to BTESSE3'));
app.use('/', exams);
app.use('/', submissions);

app.listen(PORT, () => console.log('Example app listening on port' + PORT));