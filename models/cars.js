const mongoose = require('mongoose');


const CarsSchema = new mongoose.Schema({
    make:{type: String, required:true}
    model:{type: String, required:true}
    year:{type: Number, required:true}
    color:String,
    tags:[String],
    image:{type: String, required:true}

    notes:String,
    availability:Boolean,

  });


const Cars = mongoose.model('Car', CarsSchema);

module.exports = Cars;
