const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const SimpleQandA = require('./models/qanda');


const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//instance of mongodb Database
mongoose.connect('mongodb://localhost:27017/csnow');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established succesfully!');
});

router.route('/verySimpleQuestions').get((req, res) => {
    SimpleQandA.find({}, (err, ans) => {
        if(err){
            console.log('nope');
        }
        else{
            res.json(ans);
        }
    })
})

router.route('/verySimpleQuestions/firstq').get((req, res) => {
             SimpleQandA.find({ 
                 title: { 
                     $in: [
                 "new Site or maintainance", "new Site", "maintainance please"
                ]
            }
        }, (err, ans) => {
            if(err){
                console.log('Nope!');
            }
            else{
                res.json(ans);
            }
        })    
    });


router.route('/verySimpleQuestions/secondq').get((req, res) => {
                 SimpleQandA.find({
                 })
       
   });

   router.route('/verySimpleQuestions/thirdq').get((req, res) => {
                 SimpleQandA.find({
                 title: 'maintainance'
                 })
        .then((question) => {
                 SimpleQandA.find({
                 title: 'maintainance yes'
                 })
        .then(firstanswer => {
                 SimpleQandA.find({
                 title: 'maintainance no'
                  })
        .then((secondanswer) => {
                 let answers = `${question[0].title} <br> ${firstanswer[0].title} <br> ${secondanswer[0].title}`;
            if(!question || !firstanswer || !secondanswer){    
                  res.send(`could not find any of those: ${answers}`);
             }
             else{
                 res.status(200).json(` was succesfull retreiving: <br> ${answers}`);
              }
            });
        });
    });
});



     

app.use('/', router);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`The express server is running on port ${PORT}`);
});

