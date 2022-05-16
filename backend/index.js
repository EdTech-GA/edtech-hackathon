const express = require('express');
const app = express();
const cors = require('cors');
const userController = require('./controllers/userController');

app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.redirect('/user');
});

app.use('/user', userController);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
