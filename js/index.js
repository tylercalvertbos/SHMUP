$(document).ready(function() {

	// Create The Canvas

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = 2550;
	canvas.height = 1348;

	document.body.appendChild(canvas)

// Define Variables

var score = 0;

// Background Image

var bgReady = false;
var bgImage = new Image();

bgImage.onload = function() {
	bgReady = true;
};

bgImage.src = '';

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

// Objects

var hero = {
	speed : 512,
	x : 0,
	y : 0
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

// Player Input

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset Game

var reset = function() {
	hero.y = canvas.height / 2;
}

// Update Objects

var update = function (modifier) {
	if (87 in keysDown) { // Up
		hero.y -= hero.speed * modifier;
	}
	if (83 in keysDown) { // Down
		hero.y += hero.speed * modifier;
	}
	if (65 in keysDown) { // Left
		hero.x -= hero.speed * modifier;
	}
	if (68 in keysDown) { // Right
		hero.x += hero.speed * modifier;
	}

	if (
		hero.x < enemy1.x + enemy1.width &&
   		hero.x + hero.width > enemy1.x &&
   		hero.y < enemy1.y + enemy1.height &&
   		hero.height + hero.y > enemy1.y
	) {
		reset();
	} else if (
		hero.x < enemy2.x + enemy2.width &&
   		hero.x + hero.width > enemy2.x &&
   		hero.y < enemy2.y + enemy2.height &&
   		hero.height + hero.y > enemy2.y
	) {
		reset();
	} else if (
		hero.x < enemy3.x + enemy3.width &&
  	 	hero.x + hero.width > enemy3.x &&
   		hero.y < enemy3.y + enemy3.height &&
   		hero.height + hero.y > enemy3.y
	) {
		reset();
	};

};

// Draw Stuff

var drawStuff = function() {
	if (bgReady == true) {
		ctx.drawImage(bgImage, 0, 0)
	}

	if (heroReady == true) {
		ctx.drawImage(heroSprite, hero.x, hero.y)
	}

	if (enemy1Ready == true) {
		ctx.drawImage(enemy1Sprite, enemy1.x, enemy1.y)
	}

	if (enemy2Ready == true) {
		ctx.drawImage(enemy2Sprite, enemy2.x, enemy2.y)
	}

	if (enemy3Ready == true) {
		ctx.drawImage(enemy3Sprite, enemy3.x, enemy3.y)
	}
}

// Game Loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	drawStuff();

	then = now;

	requestAnimationFrame(main);
};

// Play

var then = Date.now();
reset();
main();

});