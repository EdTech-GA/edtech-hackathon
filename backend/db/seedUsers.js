const mongoose = require('./db/connection.js');

// import User Model

const User = require('./models/User');

const userSeeds = require('./db/userSeeds.json');

User.deleteMany({})
	.then(() => {
		User.insertMany(userSeeds)
			.then(user => {
				console.log('added user');
			})
			.catch(console.log.error)
			.finally(() => {
				process.exit;
			});
	})
	.catch(err => console.error(err));
