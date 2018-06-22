const mongoose = require('mongoose');
const { Schema } = mongoose; 

const writingsSchema = new Schema({
    title: String,
    date: String, 
    image: String,  
    url: String,  
    body: String, 
}, { collection: 'writings'});

mongoose.model('writings', writingsSchema);
