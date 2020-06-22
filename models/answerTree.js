const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TreeSchema = new Schema({
    'Ich benötige lediglich einige Änderungen an einer bestehenden Webseite': {
        'einfache Webseite': {
           'Design': {
               'Ja': Number,
               'Nein': Number
           },
           'Funktionalität': {
               'Ja': Number,
               'Nein': Number
           },
           'Beides': {
               'Ja': Number,
               'Nein': Number
           }
        },
        'kleinere Webapplikation': {
           'Design': {
               'Ja': Number,
               'Nein': Number
           },
           'Funktionalität': {
               'Ja': Number,
               'Nein': Number
           },
           'Beides': {
               'Ja': Number,
               'Nein': Number
           }
        },
        'grosse, komplexe E-Commerce Seite': {
           'Design': {
               'Ja': Number,
               'Nein': Number
           },
           'Funktionalität': {
               'Ja': Number,
               'Nein': Number
           },
           'Beides': {
               'Ja': Number,
               'Nein': Number
           }
        }
   },
   'komplett neue Webseite von Grund auf': {
       'einfache Webseite' : {
           '0 - 5 Seiten': {
               'Ja': {
                   'vorgefertigte Vorlage': Number,
                   'einmaliges Design': Number
               },
               'Nein': {
                   'vorgefertigte Vorlage': Number,
                   'einmaliges Design': Number
               }
           },
           '5 - 10 Seiten': {
               'Ja': {
                   'vorgefertigte Vorlage': Number,
                   'einmaliges Design': Number
               },
               'Nein': {
                   'vorgefertigte Vorlage': Number,
                   'einmaliges Design': Number
               }
           },
           '10+ Seiten': {
               'Ja': {
                   'vorgefertigte Vorlage': Number,
                   'einmaliges Design': Number
               },
               'Nein': {
                   'vorgefertigte Vorlage': Number,
                   'einmaliges Design': Number
               }
           }   
          },
     'interaktive Webapplikation': {
       '0 - 5 Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           },
           'Nein': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           }
       },
       '5 - 10 Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           },
           'Nein': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           }
       },
       '10+ Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           },
           'Nein': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           }
       }   
          },
      'komplexe E-Commerce Seite': {
       '0 - 5 Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           },
           'Nein': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           }
       },
       '5 - 10 Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           },
           'Nein': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           }
       },
       '10+ Seiten': {
           'Ja': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           },
           'Nein': {
               'vorgefertigte Vorlage': Number,
               'einmaliges Design': Number
           }
       }   
     }}
});

let TreeSearch = module.exports = mongoose.model('TreeSearch', TreeSchema);