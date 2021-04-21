const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Comment = new Schema({
    id: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Comment', Comment);