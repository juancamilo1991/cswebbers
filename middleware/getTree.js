const TreeSearch = require('../models/answerTree');
const SimpleQandA = require('../models/qanda');

module.exports = getAnswersTree = async (req, res, next) => {
  
   let treeAnswer = await TreeSearch.find({'Ich benötige lediglich einige Änderungen an einer bestehenden Webseite': {
    'einfache Webseite': {
       'Design': {
           'Ja': 700,
           'Nein': 500
       },
       'Funktionalität': {
           'Ja': 1000,
           'Nein': 700
       },
       'Beides': {
           'Ja': 1500,
           'Nein': 1200
       }
    },
    'kleinere Webapplikation': {
       'Design': {
           'Ja': 1200,
           'Nein': 1000
       },
       'Funktionalität': {
           'Ja': 1500,
           'Nein': 1200
       },
       'Beides': {
           'Ja': 2000,
           'Nein': 2200
       }
    },
    'grosse, komplexe E-Commerce Seite': {
       'Design': {
           'Ja': 1500,
           'Nein': 1000
       },
       'Funktionalität': {
           'Ja': 1500,
           'Nein': 1200
       },
       'Beides': {
           'Ja': 2000,
           'Nein': 1700
       }
    }
}, 
'komplett neue Webseite von Grund auf': {
   'einfache Webseite' : {
       '0 - 5 Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': 1500,
               'einmaliges Design': 2100
           },
           'Nein': {
               'vorgefertigte Vorlage': 1000,
               'einmaliges Design': 1500
           }
       },
       '5 - 10 Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': 2000,
               'einmaliges Design': 2300
           },
           'Nein': {
               'vorgefertigte Vorlage': 1500,
               'einmaliges Design': 2000
           }
       },
       '10+ Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': 2800,
               'einmaliges Design': 3100
           },
           'Nein': {
               'vorgefertigte Vorlage': 2500,
               'einmaliges Design': 3000
           }
       }   
      },
 'interaktive Webapplikation': {
   '0 - 5 Seiten': {
       'Ja': {
           'vorgefertigte Vorlage': 2500,
           'einmaliges Design': 3100
       },
       'Nein': {
           'vorgefertigte Vorlage': 2000,
           'einmaliges Design': 2500
       }
   },
   '5 - 10 Seiten': {
       'Ja': {
           'vorgefertigte Vorlage': 3000,
           'einmaliges Design': 3300
       },
       'Nein': {
           'vorgefertigte Vorlage': 2500,
           'einmaliges Design': 3100
       }
   },
   '10+ Seiten': {
       'Ja': {
           'vorgefertigte Vorlage': 3800,
           'einmaliges Design': 4100
       },
       'Nein': {
           'vorgefertigte Vorlage': 3500,
           'einmaliges Design': 4000
       }
   }   
      },
  'komplexe E-Commerce Seite': {
   '0 - 5 Seiten': {
       'Ja': {
           'vorgefertigte Vorlage': 4500,
           'einmaliges Design': 5100
       },
       'Nein': {
           'vorgefertigte Vorlage': 4000,
           'einmaliges Design': 4500
       }
   },
   '5 - 10 Seiten': {
       'Ja': {
           'vorgefertigte Vorlage': 5000,
           'einmaliges Design': 5300
       },
       'Nein': {
           'vorgefertigte Vorlage': 4500,
           'einmaliges Design': 5100
       }
   },
   '10+ Seiten': {
       'Ja': {
           'vorgefertigte Vorlage': 5800,
           'einmaliges Design': 6100
       },
       'Nein': {
           'vorgefertigte Vorlage': 5500,
           'einmaliges Design': 6000
       }
   }   
 }}}).lean().exec();
  req.ans = treeAnswer;
  next();
}

  

    






