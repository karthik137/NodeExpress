const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';

const connect  = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected to the server');

    /*
    var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });

    newDish.save()
    .then((dish) =>{
        console.log(dish);

        return Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    }).then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log("ERROR : ", err);
    });
    */


    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);
        //return Dishes.find({}).exec();
        return Dishes.findByIdAndUpdate(dish._id, {
            $set: {
                description: 'Updated test'
            }
        },
            {
            new: true
        }).exec();
    })
    .then((dish) => {
        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di carpaccio'
        });
        
        return dish.save();

    })
    .then((dish) => {
        console.log(dish);
        return dish;
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    }).then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log("ERROR : ", err);
    });
});