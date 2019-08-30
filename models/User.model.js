var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseHidden = require('mongoose-hidden')();

var minLength = [3, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length (`{minLength}`)' ];

var UserSchema = new Schema({
    username: {
        type: String,
        minlength: minLength,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, //make sure there are no duplicate emails
    },
    password: {
        type: String,
        hide: true,
    }
});
UserSchema.plugin(mongooseHidden);
module.exports = mongoose.model('User', UserSchema, 'users');