const mongoose = require('mongoose');


const CarsSchema = new mongoose.Schema({
    make:{String, required:true}
    model:{String, required:true}
    year:{Number, required:true}
    color:String,
    tags:[String],
    image:{String, required:true} 
    notes:String,
    availability:Boolean

  });


const Cars = mongoose.model('Car', CarsSchema);

module.exports = Cars;
