const mongoose = require('mongoose');
const { mongooseInstance } = require('../../../db.config');



const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    number: { type: String, unique: true, required: true },
    bio: String,

});
const User = mongooseInstance.model('User', userSchema);
module.exports = User;