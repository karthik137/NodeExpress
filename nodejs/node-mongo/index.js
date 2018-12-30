const mongoclient = require('mongodb').MongoClient;

const assert = require('assert');
const dboper = require('./mongooperations');

const url = "mongodb://localhost:27017";
const dbName = 'conFusion';

/*
mongoclient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log("Connected correctly to the server");
    const db = client.db(dbName);

    const collection = db.collection('dishes');

    collection.insertOne({ "name" : "Uthappizza", "description":"test"}, (err, result) => {
        assert.equal(err, null);
        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);
                client.close();
            });
        });
    });
});

*/

mongoclient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log("Connected correctly to the server");
    const db = client.db(dbName);

    dboper.insertDocument(db, {name: "vadonut", description: "Test"}, 'dishes', (result) => {
        console.log('Insert Document:\n', result.ops);

        dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found documents:\n ", docs);

            dboper.updateDocument(db, {name: 'vadonut'}, {description: 'Updated Test'}, 'dishes', (result) => {
                console.log("Updated Document:\n ", result.result);

                dboper.findDocuments(db, "dishes", (docs) => {
                    console.log("Found documents:\n ", docs);

                    db.dropCollection('dishes', (result) => {
                        console.log("Dropped collection: "+result);
                        client.close();
                    });
                });
            });
        });
    });
});