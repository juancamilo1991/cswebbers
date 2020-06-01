const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TreeSchema = new Schema({
    'I just need a few updates on an existing Website': {
        '0 - 5 Pages': {
          'Yes': Number,
          'No': Number
           },
      '5 - 10 Pages': {
          'Yes': Number,
          'No': Number
           },
       '10+ Pages': {
          'Yes': Number,
          'No': Number
      }
    },
    'complete new Website from scratch': {
        '0 - 5 Pages': {
            'Yes': Number,
            'No': Number
             },
        '5 - 10 Pages': {
            'Yes': Number,
            'No': Number
             },
         '10+ Pages': {
            'Yes': Number,
            'No': Number
        }
    }
    
});

let TreeSearch = module.exports = mongoose.model('TreeSearch', TreeSchema);