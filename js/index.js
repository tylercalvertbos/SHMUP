$(document).ready(function() {
	//Create the canvas
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = 2550;
	canvas.height = 1348;

	document.body.appendChild(canvas);

//Manage keyboard controls
window.addEventListener('keydown', checkKeyPressed, false);

function checkKeyPressed(e) {
	if (e.keyCode == 83) {
		$('#hero').animate({
			top: '+=25'
		}, 0)
	} else if (e.keyCode == 87) {
		$('#hero').animate({
			top: '-=25'
		}, 0)
	}

};

});