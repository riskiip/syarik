const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Author = schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    biography: {
        type: String
    },
    display_picture: {
        type: string
    }
});

module.exports = Author;