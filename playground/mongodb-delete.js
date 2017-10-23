const { MongoClient } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to mongodb', err);
        return;
    }

    db.collection('Todos').findOneAndDelete({ text: "First Todo" }).then((result) => {
        console.log(result);
    });

});