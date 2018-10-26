const express = require('express');
const router = express.Router();
const Cars = require('../models/cars.js') //when model created will need to be updated

router.post('/', (req, res)=>{
    Cars.create(req.body, (err, createdCar)=>{
        res.json(createdCar);
    });
});

router.get('/', (req, res)=>{
    Cars.find({}, (err, foundCar)=>{
        res.json(foundCar);
    });
});

router.delete('/:id', (req, res)=>{
    Cars.findByIdAndRemove(req.params.id, (err, deletedCar)=>{
        res.json(deletedCar);
    });
});

router.put('/:id', (req, res)=>{
    Cars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCar)=>{
        res.json(updatedCar);
    });
});



module.exports = router;
