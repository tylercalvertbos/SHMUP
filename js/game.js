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

// Bullets



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

var enemy1Ready = false;
var enemy1Sprite = new Image();

enemy1Sprite.onload = function() {
	enemy1Ready = true;
};

enemy1Sprite.src = 'images/enemy1/enemy1.png';

var enemy2Ready = false;
var enemy2Sprite = new Image();

enemy1Sprite.onload = function() {
	enemy2Ready = true;
};

enemy2Sprite.src = 'images/enemy2/enemy2.png';

var enemy3Ready = false;
var enemy3Sprite = new Image();

enemy3Sprite.onload = function() {
	enemy3Ready = true;
};

enemy3Sprite.src = 'images/enemy3/enemy3.png';

var bulletReady = false;
var bulletSprite = new Image();

bulletSprite.onload = function() {
	bulletReady = true;
}

bulletSprite.src = 'images/ship/bullet.png';

var enemy4Ready = false;
var enemy4Sprite = new Image();

enemy4Sprite.onload = function() {
	enemy3Ready = true;
};

enemy4Sprite.src = 'images/enemy4/enemy4.png';

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
	height : 100,
	shoot : function () {
}
}
var bullet = {
	speed : 1500,
	x : hero.x / 2,
	y : hero.y / 2,
	width : 56,
	height : 36
}

var enemy1 = {
	speed : 256,
	x : 0,
	y : 0,
	scorePerKill : 50
}

var enemy2 = {
	speed : 512,
	x : 0,
	y : 0,
	scorePerKill : 100
}
	
var enemy3 = {
	speed : 384,
	x : 0,
	y : 0,
	scorePerKill : 75
}

var enemy4 = {
	speed: 128,
	x : 0,
	y : 0,
	scorePerKill : 25
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
		hero.shoot();
	}
	if (82 in keysDown) { // Player reloading
		location.reload();
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

	if (hero.x < enemy1.x + enemy1.width && hero.x + hero.width > enemy1.x && hero.y < enemy1.y + enemy1.height && hero.height + hero.y > enemy1.y) {
		lives -= 1;
		hero.y = canvas.height / 2.75;
		hero.x = 0;
	}

	if (hero.x < enemy2.x + enemy2.width && hero.x + hero.width > enemy2.x && hero.y < enemy2.y + enemy2.height && hero.height + hero.y > enemy2.y) {
		lives -= 1;
		hero.y = canvas.height / 2.75;
		hero.x = 0;
	}

	if (hero.x < enemy3.x + enemy3.width && hero.x + hero.width > enemy3.x && hero.y < enemy3.y + enemy3.height && hero.height + hero.y > enemy3.y) {
		lives -= 1;
		hero.y = canvas.height / 2.75;
		hero.x = 0;
	}

	if (hero.x < enemy4.x + enemy4.width && hero.x + hero.width > enemy4.x && hero.y < enemy4.y + enemy4.height && hero.height + hero.y > enemy4.y) {
		lives -= 1;
		hero.y = canvas.height / 2.75;
		hero.x = 0;
	}

	if (bullet.x < enemy1.x + enemy1.width && bullet.x + bullet.width > enemy1.x && bullet.y < enemy1.y + enemy1.height && bullet.height + bullet.y > enemy1.y) {
		lives -= 1;
		hero.y = canvas.height / 2.75;
		hero.x = 0;
	}

	if (hero.x < eBullet.x + eBullet.width && hero.x + hero.width > eBullet.x && hero.y < eBullet.y + eBullet.height && hero.height + hero.y > eBullet.y) {
		lives -= 1;
		hero.y = canvas.height / 2.75;
		hero.x = 0;
	}

$('div').html('SCORE<br><br>' + score);
}

// Reset Game

var reset = function() {
	hero.y = canvas.height / 2.75;
	score = 0;
}

// Draw Stuff

var drawStuff = function() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, window.innerWidth, window.innerHeight);
	}

	if (heroReady) {
		ctx.drawImage(heroSprite, hero.x, hero.y, 100, 100)
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