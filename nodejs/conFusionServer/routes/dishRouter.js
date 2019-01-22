const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../models/dishes');



//this makes dishRouter as express router
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
/*
dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    console.log("This is dishes get");
    res.end('Will send all the dishes to you');
})
.post((req, res, next) => {
    res.end('Will add the dish: '+req.body.name +
     ' With details: '+req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported ');
})
.delete((req, res, next) => {
    //res.statusCode = 403;
    res.end('Deleting all the dishes');
});
*/
dishRouter.route('/')
.get((req, res, next) => {
    Dishes.find({})
    .then((dishes) => {
        //send json array
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Dishes.create(req.body)
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next)
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported ');
})
.delete((req, res, next) => {
    //res.statusCode = 403;
    res.end('Deleting all the dishes');
});




dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send details of the dish: '+req.params.dishId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Operation not permitted on dish: '+req.params.dishId);
})

.put((req, res, next) => {
    res.write('Updating the dish: '+req.params.dishId);
    res.end('Will update the dish: '+req.body.name + ' \n With details: '+req.body.description);
})
.delete((req, res, next) => {
    //res.statusCode = 403;
    res.end('Deleting all the dishes');
});

module.exports = dishRouter;