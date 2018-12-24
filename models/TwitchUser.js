const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameHistorySchema = new Schema({
	created: Date,
	name: String
});

const twitchUserSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		required: true,
		auto: true
	},
	twitchId: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true
	},
	displayName: {
		type: String,
		required: true
	},
	previousUserNames: [nameHistorySchema],
	previousDisplayNames: [nameHistorySchema],
	created: Date,
	updated: Date
});

const TwitchUser = mongoose.model('TwitchUser', twitchUserSchema);

module.exports = TwitchUser;
