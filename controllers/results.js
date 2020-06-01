   module.exports = evaluatePrice = (req, res, next) => {
        if(Number.isInteger(req.index) && req.nextValue instanceof Object){
            var answerObject = req.nextValue;
            var answerIndex = req.index;
        }
        else{
            var answerObject = req.ans[0];
            var answerIndex = 0;
        }
            for(const [property, value] of Object.entries(answerObject)){
                let nextProperty = property;
                let nextValue = value;
                 if(nextProperty == req.body[answerIndex].body){
                    if(Number.isInteger(nextValue)){
                        req.finalAnswer = nextValue;
                        return next();
                        }
                        else{
                        answerIndex++;
                        req.index = answerIndex;
                        req.nextValue = nextValue;
                        evaluatePrice(req, res, next);
                        }
                 }
        }
        return;
    }