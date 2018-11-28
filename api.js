const express = require('express');
const app = express();
var fs = require("fs");
const PORT = process.env.PORT || 3000;

var exams = require('./resources/exams');

app.use('/', exams);

app.listen(PORT, () => console.log('Example app listening on port' + PORT));