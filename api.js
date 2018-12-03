const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

var users = require('./resources/user');

app.use('/users', users);

app.get('/', (req, res) => res.send('Hello Word!'));

// app.get('/users/:id', function (req, res) {
	// const result = get_user_byId(req.params.id);
	// res.end(JSON.stringify(result));
// });

// app.delete('/users/:id', function (req, res) {
	// const result = delete_user_byId(req.params.id);
	// res.send(result);
// });

app.listen(PORT, () => console.log('Example app listening on port' + PORT));
