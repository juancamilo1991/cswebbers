const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const SimpleQandA = require('./models/qanda');
const User = require('./models/user');
const evaluatePrice = require('./controllers/results');
const getAnswersTree = require('./middleware/getTree');
const bcrypt = require('bcrypt');


const app = express();
const router = express.Router();    

app.use(cors());
app.use(bodyParser.json());

//instance of mongodb Database
mongoose.connect('mongodb://localhost:27017/csnow', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established succesfully!');
});

router.route('/verySimpleQuestions/firstquestion').get((req, res) => {
             SimpleQandA.find({ 
                 title: { 
                     $in: [
                 "new Site or maintainance",
                 "new Site",
                 "maintainance please"
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


    router.route('/verySimpleQuestions/secondquestion').get((req, res) => {
        SimpleQandA.find({ 
            title: { 
                $in: [
            "how many pages",
            "amount pages",
            "amount pages more",
            "amount pages most"
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

router.route('/verySimpleQuestions/thirdquestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "maintainance",
        "maintainance yes",
        "maintainance no"
       ]
   }
}, (err, ans) => {
   if(err){
       console.log('Nope!');
   }
   else{
       res.send(ans);
   }
})    
});

//calculate survey final price. Return answer to the view
router.route('/verySimpleQuestions/result').post(getAnswersTree, evaluatePrice, (req, res) => {  
    res.json(req.finalAnswer);
});


//user login
router.route('/user/login').post((req, res) => {
    console.log(req.body);
    res.json('alright');
}) 


//user registration
router.route('/user/register').post(async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = new User(req.body);
        user.save()
        .then(user => {
            res.redirect('https://www.google.com');
            console.log(`user was succesfully added ${user}`);
        }).catch(error => {
            console.log(`user could not be added`);
            res.redirect('http://localhost:4200/register');
        })
}) 

app.use('/', router);   


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`The express server is running on port ${PORT}`);
});

