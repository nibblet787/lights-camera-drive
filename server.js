// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const session = require('express-session')
require('dotenv').config()


// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.json());

// =======================================
//            STATIC ASSETS
// =======================================

app.use(express.static('public'));

// =======================================
//            CONTROLLERS
// =======================================

const CarsController = require('./controllers/cars.js')
app.use('/', CarsController)

const userController = require('./controllers/users.js')
app.use('/', userController)

const sessionsController = require('./controllers/sessions.js')
app.use('/', sessionsController)

// =======================================
//              PORT
// =======================================

const PORT = process.env.PORT || 3000;

// =======================================
//             GLOBAL CONFIG
// =======================================

const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `movieCars`;

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
db.once('open', ()=>{
  console.log('Connected to Mongo');
})

// =======================================
//             ERROR/SUCCESS MESSAGES
// =======================================

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// =======================================
//            ROUTES
// =======================================

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.listen(3000, ()=>{
    console.log('Lights camera Drive ...');
});
