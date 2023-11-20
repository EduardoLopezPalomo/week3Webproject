var express = require('express');
var router = express.Router();

let users = []; 

router.post('/', (req, res) => {
    const { name, todo } = req.body;
    const userExists = users.find(user => user.name === name);

    if (userExists) {
        userExists.todos.push(todo);
        res.send('Todo added');
    } else {
        users.push({ name, todos: [todo] });
        res.send('User added');
    }
});

module.exports = {router, users};