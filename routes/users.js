var express = require('express');
var todoModule = require("./todo");
var router = express.Router();

let users = todoModule.users;

/* GET users listing. */
router.get('/:id', (req, res) => {
  const id = req.params.id; 
  const user = users.find(user => user.name.toLowerCase() === id.toLowerCase());

  if (user) {
      res.json(user);
  } else {
      res.status(404).send('User not found');
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params; 
  const index = users.findIndex(user => user.name.toLowerCase() === id.toLowerCase());

  if (index !== -1) {
      users.splice(index, 1); 
      res.send('User deleted');
  } else {
      res.status(404).send('User not found');
  }
});

module.exports = router;
