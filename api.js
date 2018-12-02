const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 3000

var tasks = require('./resources/tasks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/tasks', tasks);

app.get('/', (req, res) => res.send('Hello Word!'))
app.listen(PORT, () => console.log('Example app listening on port'+ PORT))

