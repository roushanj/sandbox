var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://oliver7:75Hz4815@@ds113000.mlab.com:13000/myapp_task_manager',['tasks'])

router.get('/tasks', function(req, res) {

	db.tasks.find(function(err, tasks){

		if (err) {
			res.send(err);
		} 
			
			else{
				res.json(tasks);
			};
	})


});

module.exports = router;