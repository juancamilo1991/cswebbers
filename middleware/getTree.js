const TreeSearch = require('../models/answerTree');
const SimpleQandA = require('../models/qanda');

module.exports = getAnswersTree = async (req, res, next) => {
  
   var treeAnswer = await TreeSearch.find({'I just need a few updates on an existing Website': {
     '0 - 5 Pages': {
    'Yes': 10,
    'No': 8
     },
'5 - 10 Pages': {
    'Yes': 7,
    'No': 5
     },
 '10+ Pages': {
    'Yes': 12,
    'No': 40
}
},
'complete new Website from scratch': {
  '0 - 5 Pages': {
      'Yes': 100,
      'No': 80
       },
  '5 - 10 Pages': {
      'Yes': 70,
      'No': 50
       },
   '10+ Pages': {
      'Yes': 120,
      'No': 400
  }}}).lean().exec();
  req.ans = treeAnswer;
  next();
}
 
  

    






