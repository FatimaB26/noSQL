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

    const resultFind = await CarModel.findById("5fac7785d1909a733ba6500e").exec();
    const resultUpdate = await resultFind.update({ year : 2000});

    console.log (resultFind)
    
    }

    run ()

