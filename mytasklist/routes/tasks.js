var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://roushan:roushan@ds113000.mlab.com:13000/myapp_task_manager',['tasks'])

router.get('/tasks', function(req, res, next){

	db.tasks.find(function(err, tasks){

		if (err) {
			res.send(err);
		} 
			
			else{
				res.json(tasks);
			};
	})


});

router.get('/tasks/:id', function(req, res, next) {

	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){

		if (err) {
			res.send(err);
		} 
			
			else{
				res.json(task);
			};
	})


});


module.exports = router;