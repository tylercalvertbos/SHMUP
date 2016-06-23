$(document).ready(function() {

	// Create The Canvas

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	document.body.appendChild(canvas)


// Define Variables

window.onload = function() {
	var score = 0;
}

var lives = 3;
var shots = [];
var keysDown = {};

// Enemies



// Background Image

var bgReady = false;
var bgImage = new Image();

bgImage.onload = function() {
	bgReady = true;
};

bgImage.src = 'images/background.png';

// Hero Sprite

var heroReady = false;
var heroSprite = new Image();

heroSprite.onload = function() {
	heroReady = true;
};

heroSprite.src = 'images/ship/ship.png';
// Enemy Sprites

var enemyReady = false;
var enemySprite = new Image();

enemySprite.onload = function() {
	enemyReady = true;
};

enemySprite.src = 'images/enemy4/enemy4.png';

var eBulletReady = false;
var eBulletSprite = new Image();

eBulletSprite.onload = function() {
	eBulletReady = true;
}

eBulletSprite.src = 'images/eBullet.png';

// Objects

var hero = {
	speed : 600,
	x : 0,
	y : 0,
	width : 100,
	height : 100
}
var bullet = {
	speed : 1500,
	x : hero.x / 2,
	y : hero.y / 2,
	width : 56,
	height : 36
}

var enemy = {
	x : 0,
	y : 0
}

var eBullet = {
	speed : 1500,
	x : 0,
	y : 0
}
// Pause


// Player Input


addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var update = function (modifier) {
	if (87 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (83 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (65 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (68 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}
	if (191 in keysDown) { // Player firing

	}
	if (82 in keysDown) { // Player reloading
		update();
	}
	if (80 in keysDown) { // Player pausing
		score += 5867097;
	}

	if (hero.x < 0) {
		hero.x = 0;
	}
	if (hero.y < 0) { 
		hero.y = 0;
	}
	if (hero.x + hero.width > canvas.width) {
		hero.x = canvas.width - hero.width;
	}
	if (hero.y + hero.height > canvas.height) {
		hero.y = canvas.height - hero.height;
	}

	if (hero.x < enemy.x + 100 && hero.x + 100 > enemy.x && hero.y < enemy.y + 100 && 100 + hero.y > enemy.y) {
		lives -= 1;
		reset();
	}

$('div').html('SCORE<br><br>' + score);
$('#lives').html(lives + '<br><br>LIVES')


}

// Score


// Reset Game

var reset = function() {
	hero.y = canvas.height / 2.75;
	score = 0;

	enemy.x = 0;
	enemy.y = (Math.random() * canvas.height)
}

// Draw Stuff

var drawStuff = function() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, window.innerWidth, window.innerHeight);
	}

	if (heroReady) {
		ctx.drawImage(heroSprite, hero.x, hero.y, 100, 100)
	}

	if (enemyReady) {
			ctx.drawImage(enemySprite, enemy.x, enemy.y, 100, 100)
		}
	}
}


// Game Loop

var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000)
	drawStuff();

	then = now;

	requestAnimationFrame(main);
};

// Play

var then = Date.now();

reset();
main();

});