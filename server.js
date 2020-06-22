if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const SimpleQandA = require('./models/qanda');
const User = require('./models/user');
const evaluatePrice = require('./controllers/results');
const getAnswersTree = require('./middleware/getTree');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');


const initializePassport = require('./passport-config');

initializePassport(
passport, 
email => User.find({email: email}),
id => User.find({id: id})
);


const app = express();
const router = express.Router();    

app.use(cors());
app.use(bodyParser.json());

app.use(flash());
app.use(session({
    secret: 'aefvdvvvrAFBDARFDBAFD',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())

//instance of mongodb Database
mongoose.connect('mongodb://localhost:27017/csnow', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established succesfully!');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

router.route('/verySimpleQuestions/firstquestion').get((req, res) => {
             SimpleQandA.find({ 
                 title: { 
                     $in: [
                 "new Site or maintainance",
                 "complete new Site",
                 "changes"
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

    router.route('/verySimpleQuestions/newSiteQuestion').get((req, res) => {
        SimpleQandA.find({ 
            title: { 
                $in: [
            "simple or e-commerce",
            "new Site simple site",
            "new Site interactive",
            "new Site complex"
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

router.route('/verySimpleQuestions/howManyPagesQuestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "how many pages",
        "new Site simple site amount pages",
        "new Site simple site amount pages more",
        "new Site simple site amount pages most"
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

router.route('/verySimpleQuestions/newSiteAnnualCheckUpsQuestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "maintainance",
        "new Site simple site amount pages yes",
        "new Site simple site amount pages no",
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

router.route('/verySimpleQuestions/newSiteDesignQuestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "pre-built or unique",
        "new Site simple site amount pages yes template",
        "new Site simple site amount pages yes unique",
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

router.route('/verySimpleQuestions/newSiteDesignQuestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "pre-built or unique",
        "new Site simple site amount pages yes template",
        "new Site simple site amount pages yes unique",
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

router.route('/verySimpleQuestions/updateSiteQuestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "simple or e-commerce",
        "simple Site",
        "small app",
        "complex e-commerce"
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

router.route('/verySimpleQuestions/updateSiteDesignQuestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "design or functionality",
        "simple Design",
        "functionality",
        "both"
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

router.route('/verySimpleQuestions/updateSiteCheckupQuestion').get((req, res) => {
    SimpleQandA.find({ 
        title: { 
            $in: [
        "maintainance update",
        "changes app design yes",
        "changes app design no"
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

router.route('/verySimpleQuestions/nextQuestion').post((req, res) => {
    if(req.body.title == 'complete new Site'){
        SimpleQandA.find({title: {$in: [
            'simple or e-commerce',
            'simple Site',
            'new Site interactive',
            'new Site complex'
        ]}}, (err, ans) => {
            if(err){
                console.log('Noooope !');
            }
            else{
                res.send(ans);
            }
        });
    }
    else if((req.body.title == 'simple Site') || 
            (req.body.title == 'new Site interactive') ||
            (req.body.title == 'new Site complex')){
        SimpleQandA.find({title: {$in: [
            'how many pages',
            'new Site simple site amount pages',
            'new Site simple site amount pages more',
            'new Site simple site amount pages most'
        ]}}, (err, ans) => {
            if(err){
                console.log('Noooope !');
            }
            else{
                res.send(ans);
            }
        });
    }
    else if((req.body.title == 'new Site simple site amount pages') || 
            (req.body.title == 'new Site simple site amount pages more') ||
            (req.body.title == 'new Site simple site amount pages most')){
        SimpleQandA.find({title: {$in: [
            'maintainance',
            'new Site simple site amount pages yes',
            'new Site simple site amount pages no'
        ]}}, (err, ans) => {
            if(err){
                console.log('Noooope !');
            }
            else{
                res.send(ans);
            }
        });
    }
     else if((req.body.title == 'new Site simple site amount pages yes') || 
            (req.body.title == 'new Site simple site amount pages no')){
        SimpleQandA.find({title: {$in: [
            'pre-built or unique',
            'new Site simple site amount pages yes unique',
            'new Site simple site amount pages no template'
        ]}}, (err, ans) => {
            if(err){
                console.log('Noooope !');
            }
            else{
                res.send(ans);
            }
        });
    }
    else if(req.body.title == 'changes'){
        SimpleQandA.find({title: {$in: [
            'simple or e-commerce',
            'simple Site',
            'small app',
            'complex e-commerce'
        ]}}, (err, ans) => {
            if(err){
                console.log('Noooope !');
            }
            else{
                res.send(ans);
            }
        });
    }
    else if((req.body.title == 'simple Site') ||
            (req.body.title == 'small app') ||
            (req.body.title == 'complex e-commerce')){
        SimpleQandA.find({title: {$in: [
            'design or functionality',
            'simple Design',
            'functionality',
            'both'
        ]}}, (err, ans) => {
            if(err){
                console.log('Noooope !');
            }
            else{
                res.send(ans);
            }
        });
    }
     else if((req.body.title == 'simple Design') ||
            (req.body.title == 'functionality') ||
            (req.body.title == 'both')){
        SimpleQandA.find({title: {$in: [
            'maintainance update',
            'changes app design yes',
            'changes app design no'
        ]}}, (err, ans) => {
            if(err){
                console.log('Noooope !');
            }
            else{
                res.send(ans);
            }
        });
    }
})

//calculate survey final price. Return answer to the view
router.route('/verySimpleQuestions/result').post(getAnswersTree, evaluatePrice, (req, res) => {  
    res.json(req.finalAnswer);
});


//user login
router.route('/user/login').post((req, res, next) => {
    passport.authenticate('local', (user, err, info) => {
        if(err) { return next(err); }
        if(!user){ res.json('access not granted'); }
        req.logIn(user, (err) => {
            if(err){ return next(err); }
            return res.json(`Welcome, ${user.firstName}`)
        })
    })(req, res, next); 
})


//user registration
router.route('/user/register').post(async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = new User(req.body);
        user.save()
        .then(user => {
            res.json('user added succesfully!');
        }).catch(error => {
            res.json(`failed to add user`);
        })
})

app.use('/', router);   


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`The express server is running on port ${PORT}`);
});

