// npm init
// npm i express
//npm i mongoose

const express = require('express');
const app = express();
const mongoose = require('mongoose')


app.use(express.json());
app.use(express.static('public'));


const CarsController = require('./controllers/cars.js')
app.use('/cars', CarsController)

const userController = require('./controllers/users.js')
app.use('/cars', userController)

const sessionsController = require('./controllers/sessions.js')
app.use('/cars', sessionsController)




mongoose.connect('mongodb://localhost:27017/movieCars', { useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});




app.listen(3000, ()=>{
    console.log('listening...');
});
