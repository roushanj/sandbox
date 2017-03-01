var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res) {

	res.send('API PAGE');


});

module.exports = router;