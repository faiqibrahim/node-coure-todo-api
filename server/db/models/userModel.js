const { mongoose } = require('./../mongoose');

var UserModel = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});


module.exports = {
    UserModel
};