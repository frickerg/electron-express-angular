module.exports = () => {
	var express = require('express');
	var path = require('path');
	var app = express();

	// parser
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());

	// logger
	var morgan = require('morgan');
	app.use(morgan('dev'));

	// db
	// var db_infos = require('./db_infos');
	// var db = require('mongoose');

	// Angular
	app.use(express.static(path.join(__dirname, '../angular/dist')));
	// API routes
		// only for example
		// require('./api/routes/todo.routes.js')(app); 

	app.listen(3000, function () {
	  console.log('listening on port 3000...');
	});
}