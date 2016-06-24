var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

// Initialise the high score array

app.set('highscores.file', 'highscores.json');

fs.exists(app.get('highscores.file'), function(exists) {
		// If the highscores file exists, then save it
		if (exists) {
			fs.readFile(app.get('highscores.file'), function(err, data) {
				app.set('highscores', JSON.parse(data));
			});
		}
		else {
			// Pre-populate the array with dummy scores
			var highscores = [];
			for ( var x = 0 ; x < 10 ; x++ ) {
				highscores.push({
					name: 'AAA',
					score: '10000'
				});
			}
			app.set('highscores', highscores);
		}
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
