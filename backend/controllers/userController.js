const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Get all User Items

router.get('/', async (req, res) => {
	try {
		const user = await User.find();
		if (user) {
			res.json(user);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// Get User by ID

router.get('/:_id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			res.json(user);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// create new User

router.post('/', (req, res) => {
	const newUser = req.body;
	User.create(newUser).then(user => {
		res.json(user);
	});
});

// Update User by Id

router.put('/:_id', async (req, res) => {
	try {
		const updatedUser = req.body;
		const updatedDocument = await User.findByIdAndUpdate(
			req.params.id,
			updatedUser,
			{ new: true }
		);
		res.json(updatedDocument);
	} catch (error) {
		console.log(error);
	}
});

//  Delete User by ID

router.delete('/:_id', async (req, res) => {
	try {
		const deleteUser = await User.findByIdAndDelete({
			_id: req.params.id
		});
		res.json(deleteUser);
	} catch (error) {
		console.log.error;
	}
});

//  Delete (Remove) User by name

router.delete('/name', async (req, res) => {
	try {
		const deleteUser = await User.findOneAndRemove({
			name: req.params.name
		});
		res.json(deleteUser);
	} catch (error) {
		console.log.error;
	}
});

module.exports = router;
