const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let SimpleSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    body: {
        type: String
    }
});

let SimpleQandA = module.exports = mongoose.model('SimpleQandA', SimpleSchema);
