async function run () {
    
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

    const CarModel = mongoose.model('Car', carSchema);

    const resultDelete = await CarModel.deleteMany({ brand : "Renault"});

    console.log (resultDelete)
    
    }

    run ()