const mongoose = require('mongoose');


const CarsSchema = new mongoose.Schema({
    make: String,
    model:String,
    year:Number,
    color:String,
    tags:[String],
    image:String,
    notes:String

  });


const Cars = mongoose.model('Car', CarsSchema);

module.exports = Cars;
