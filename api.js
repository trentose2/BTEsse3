const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

var tasks = require('./resources/tasks');

app.use('/tasks', tasks);

app.get('/', (req, res) => res.send('Hello Word!'))
app.listen(PORT, () => console.log('Example app listening on port'+ PORT))

