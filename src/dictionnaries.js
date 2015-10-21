'use strict';

function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

/* Required dictionnaries should be added here
*  one line per dictionnary.
*  Example : dictionnaries = extend(dictionnaries, require("./dictionnaries/dictionnary"));
			 where dictionnary is a valid javascript dictionnary file.
*/
var dictionnaries = {};
dictionnaries = extend(dictionnaries, require("./dictionnaries/sample_dictionnary"));

module.exports = dictionnaries;