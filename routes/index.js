var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  const { user } = req.body;

  res.render('userDetails', { user });
});





module.exports = router;
