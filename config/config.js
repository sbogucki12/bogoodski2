if(process.env.NODE_ENV == 'production'){
    // use production files 
    // module.exports = require('./prodstuff');
    // in prodstuff file, reference env vars
    // dont git commit prodstuff file 
} else {
    // use dev files 
    // module.exports = require('./devstuff');
};