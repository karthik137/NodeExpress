const assert = require('assert');


exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        assert.equal(err, null);
        //n is the number of documents
        console.log("Inserted "+result.result.n
        + "documents into the collection "+ collection
        );
        callback(result);
    });

};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);

};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);

};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);

};