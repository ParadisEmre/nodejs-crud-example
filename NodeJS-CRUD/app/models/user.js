var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    }, {collection: 'users'});

var User = mongoose.model('user', userSchema);

module.exports = User;

