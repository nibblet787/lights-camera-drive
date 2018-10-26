// npm init
// npm i express
//npm i mongoose

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `movieCars`;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));




app.use(express.json());
app.use(express.static('public'));


const CarsController = require('./controllers/cars.js')
app.use('/cars', CarsController)

const userController = require('./controllers/users.js')
app.use('/cars', userController)

const sessionsController = require('./controllers/sessions.js')
app.use('/cars', sessionsController)


app.get('/', (req, res) => {
  res.send("Hello World")
})



app.listen(3000, ()=>{
    console.log('listening...');
});
