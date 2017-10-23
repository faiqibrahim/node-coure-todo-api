const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to database', err);
        return;
    }


    var collection = db.collection('Users');

    collection.findOneAndUpdate({
        _id: new ObjectID("59ed790f23cec626b8f5659f")
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

});