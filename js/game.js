$(document).ready(function() {

	// Create The Canvas

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	document.body.appendChild(canvas)


// Define Variables

var score = 0;
var highscore = 0;
var lives = 3;
var bullets = new Array();


// High score

var newHighscore = score;

if (newHighscore > highscore) {
	highscore = newHighscore;
}

// Background Image

var bgReady = false;
var bgImage = new Image();

bgImage.onload = function() {
	bgReady = true;
};

bgImage.src = 'images/background.jpg';

// Hero Sprite

var heroReady = false;
var heroSprite = new Image();

heroSprite.onload = function() {
	heroReady = true;
};

heroSprite.src = 'images/hero.png';
// Enemy Sprites

var enemy1Ready = false;
var enemy1Sprite = new Image();

enemy1Sprite.onload = function() {
	enemy1Ready = false;
};

enemy1Sprite.src = '';

var enemy2Ready = false;
var enemy2Sprite = new Image();

enemy1Sprite.onload = function() {
	enemy2Ready = false;
};

enemy2Sprite.src = '';

var enemy3Ready = false;
var enemy3Sprite = new Image();

enemy3Sprite.onload = function() {
	enemy3Ready = false;
};

enemy3Sprite.src = '';

var bulletReady = false;
var bulletSprite = new Image();

bulletSprite.onload = function() {
	bulletReady = true;
}

bulletSprite.src = 'images/bullet.gif';

// Objects

var hero = {
	speed : 600,
	x : 0,
	y : 0,
	width: 287,
	height: 380
}
var bullet = {
	speed : 1500,
	x :  hero.x + (hero.width / 2) - hero.width,
	y :  hero.y + (hero.height / 2) - hero.height
}

var enemy1 = {
	speed : 256,
	x : 0,
	y : 0
}

var enemy2 = {
	speed : 512,
	x : 0,
	y : 0
}

var enemy3 = {
	speed : 384,
	x : 0,
	y : 0
}

// Pause

var pauseGame = function() {

}

// Player Input

var keysDown = {};

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
		shoot();
	}
	if (82 in keysDown) { // Player reloading
		location.reload();
	}
	if (80 in keysDown) { // Player pausing
		pauseGame();
	}

	if (hero.x < 0)
		hero.x = 0;

	if (hero.y < 0) 
		hero.y = 0;

	if (hero.x + hero.width > canvas.width)
		hero.x = canvas.width - hero.width;

	if (hero.y + hero.height > canvas.height)
		hero.y = canvas.height - hero.height;

}

// Shoot

var shoot = function() {
	bullets.push(bullet);
};

// Reset Game

var reset = function() {
	hero.y = canvas.height / 2.75;
}

// Draw Stuff

var drawStuff = function() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, window.innerWidth, window.innerHeight);
	}

	if (heroReady) {
		ctx.drawImage(heroSprite, hero.x, hero.y)
	}

	if (bulletReady) {
	for (i = 0; i < bullets.length; i++) {
			ctx.drawImage(bulletSprite, bullet.x, bullet.y);
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