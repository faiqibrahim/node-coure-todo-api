const { mongoose } = require('./../mongoose');

var TodoModel = mongoose.model('Todos', {
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    completedOn: {
        type: Date,
        required: false,
        default: null
    }
});

module.exports = {
    TodoModel
};