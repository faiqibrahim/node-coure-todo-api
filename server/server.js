const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { TodoModel } = require('./db/models/todoModel');
const { UserModel } = require('./db/models/userModel');

var app = express();

app.use(bodyParser.json());

app.get('/', (req, resp) => {
    resp.send({
        greeting: 'Hello World'
    });
});


app.post('/todo', (req, resp) => {
    var { text } = req.body;
    var todoModel = new TodoModel({
        text
    });

    todoModel.save().then((result) => {
        resp.status(200).send(result);
    }, (err) => {
        resp.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('App started on port 3000');
});