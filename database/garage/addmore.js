const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exo_students_database',
    { useUnifiedTopology: true, useNewUrlParser: true });

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created: {
        type: Date,
        default: Date.now
    },

})

const CarModel = mongoose.model('Car', carSchema);

const arr = [{
    brand: 'Aston Martin',
    model: 'DB9',
    year: 2010
},
{
    brand: 'Range Rover',
    model : 'Discovery Sport',
    year : 2017
}];


CarModel.insertMany(arr, function (error, docs) { });