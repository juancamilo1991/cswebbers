const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let MonsterSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    strength: {
        type: Number
    }
});

module.exports = mongoose.model('Monster', MonsterSchema);