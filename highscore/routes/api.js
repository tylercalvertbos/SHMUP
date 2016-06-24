var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET high scores */
router.get('/', function(req, res, next) {
	var highscores = req.app.get('highscores');
	res.send({
		data: highscores
	});
	return;
});

/* POST high score */
router.post('/', function(req, res, next) {
	var highscores = req.app.get('highscores');

	// Assume the JSON is formatted correctly e.g.
	// {
	//     "name": "ASS",
	//     "score": 29692
	// }
	var score = req.body;

	// Add the score to the array
	highscores.push(score);

	// Sort the array by highest to lowest
	highscores.sort(function(a,b) {
		return b.score-a.score;
	});

	// Take the top 10
	highscores = highscores.slice(0, 10);

	// Reset the array
	req.app.set('highscores', highscores);

	// Save the array to file
	fs.writeFile(req.app.get('highscores.file'), JSON.stringify(highscores));

	// Return the highscores
	res.send({
		data: highscores
	});
	return;
});

module.exports = router;
