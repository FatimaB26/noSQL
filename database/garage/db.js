const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exo_students_database',
{useUnifiedTopology: true, useNewUrlParser : true});

const carSchema = new mongoose.Schema({
    brand : String,
    model : String,
    year : Number,
    created : {type : Date, 
            default : Date.now},

})



