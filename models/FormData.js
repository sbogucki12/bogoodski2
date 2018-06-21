const mongoose = require('mongoose');
const { Schema } = mongoose; 

const formDataSchema = new Schema({
    name: String, 
    email: String, 
    phone: String, 
    message: String 
});

mongoose.model('formMessages', formDataSchema);