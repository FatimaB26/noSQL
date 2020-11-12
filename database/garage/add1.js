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

    const renault = new CarModel ({
        brand : "Renault",
        model : "Espace",
        year : "1999"
    })

    const renault2 = new CarModel ({
        brand : "Renault",
        model : "Scenic",
        year : "2004"
    })

    const peugeot = new CarModel ({
        brand : "Peugeot",
        model : "308",
        year : "2017"
    })

    const resultRenault = await renault.save()
    const resultRenault2 = await renault2.save()
    const resultPeugeot = await peugeot.save()

    console.log (resultRenault)
    console.log (resultRenault2)
    console.log (resultPeugeot)
    
    }

    run ()