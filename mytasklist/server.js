var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();

var port = 3000;

//view engine

app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//static files

app.use(express.static(path.join(__dirname, ('client'))));


//body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){

	console.log('server is listening');
      });
