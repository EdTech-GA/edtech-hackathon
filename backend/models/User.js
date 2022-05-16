const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

// Schema of user item

const UserSchema = new Schema({
	name: { type: String, require: true, unique: true },
	howMuch: { type: Number, default: 0 },
	eaten: { type: Number, default: 0 },
	remaining: {
		type: Number,
		default: function() {
			return this.howMuch - this.eaten;
		}
	},
	minimum: { type: Number, require: true },
	unitMeasure: String,
	purchased: Boolean,
	Date: String,
	img: String,
	type: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
