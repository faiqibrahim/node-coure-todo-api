const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb', err);
        return;
    }

    var collection = db.collection('Todos');
    getAllFromCollection(collection);

    // insertIntoCollection({ text: "Second Doc", completed: false }, collection);

    // collection = db.collection('Users');
    // insertIntoCollection({ name: "Ibraheem Faiq", age: 25, location: "Lahore, Pakistan" }, collection);

    // db.close();
});


var getAllFromCollection = (collection) => {
    if (collection) {
        collection.find({ completed: false }).toArray().then((_data) => {
            console.log(JSON.stringify(_data, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch data due to', err);
        }).catch((err) => {
            console.log('Error occurred while trying to fetch data.', err);
        });
    }
};


var insertIntoCollection = (doc, collection) => {
    if (doc && collection) {
        collection.insertOne(doc, (err, doc) => {
            if (err) {
                console.log('Error occurred while writing document to collection', err);
            } else {
                console.log('Doc inserted successfully.');
                console.log(JSON.stringify(doc.ops, undefined, 2));
            }
        });
    }
};