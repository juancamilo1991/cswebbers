module.exports = testAnswers = (req, res, tree, ansIndex) => {

    if(req.body[ansIndex].body && tree){
        let finalTree = tree;
        let varIndex = ansIndex;

        for(const [property, value] of Object.entries(finalTree)){
            let nextProperty = property;
            let nextValue = value;
            
             if(nextProperty == req.body[varIndex].body){
                if(Number.isInteger(nextValue)){
                    console.log(`it worked! Your costs: ${nextValue}`);
                      return res.json(nextValue);
                    }
                    varIndex++;
                    this.testAnswers(req, res, nextValue, varIndex);
                }
            }
        }
         return res.send('Something went wrong in the backend');
}

module.exports = initialIndex = 0;