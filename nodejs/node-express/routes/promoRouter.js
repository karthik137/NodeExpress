const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    next();
})
.get((req, res, next) => {
    res.end("Will send all the promotions");
})
.post((req, res, next) => {
    res.end("Will add all the promotions");
})
.put((req, res, next) => {
    res.end("Will update all the promotions");
})
.delete((req, res, next) => {
    res.end("Will delete all the promotions");
});


promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    next();
})
.get((req, res, next) => {
    res.end("Will send promotion: "+req.params.promoId);
})
.post((req, res, next) => {
    res.end("Will create promotion: "+req.body.name
    +" with description: "+req.body.description);
})
.put((req, res, next) => {
    res.end("Will update promotion: "+req.params.promoId);
})
.delete((req, res, next) => {
    res.end("Will delete promotion: "+req.params.promoId);
});

module.exports = promoRouter;