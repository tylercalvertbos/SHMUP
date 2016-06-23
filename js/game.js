$(document).ready(function() {

	// Create The Canvas

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	document.body.appendChild(canvas)


// Define Variables

var score = 0;
var lives = 5;
var keysDown = {};
var difficulty = 2;
var scoreIncrement;
var enemySpeed;

// Enemies

var enemySprites = ['images/enemy4/enemy4.png', 'images/enemy1/enemy1.png', 'images/enemy2/enemy2.png', 'images/enemy3/enemy3.png']

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

enemySprite.src = enemySprites[1];

enemy2Sprite = new Image();
enemy2Sprite.src = enemySprites[2];

enemy3Sprite = new Image();
enemy3Sprite.src = enemySprites[3];

enemy4Sprite = new Image();
enemy4Sprite.src = enemySprites[0];

enemy5Sprite = new Image();
enemy5Sprite.src = enemySprites[1];

enemy6Sprite = new Image();
enemy6Sprite.src = enemySprites[2];

enemy7Sprite = new Image();
enemy7Sprite.src = enemySprites[3];

enemy8Sprite = new Image();
enemy8Sprite.src = enemySprites[0]; 


// Objects

var hero = {
	speed : 1200,
	x : 0,
	y : canvas.height / 2.75,
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
	x : window.innerWidth - hero.width,
	y : 0
}

var enemy2 = {
	x : window.innerWidth - hero.width,
	y : 0
}

var enemy3 = {
	x : window.innerWidth - hero.width,
	y : 0
}

var enemy4 = {
	x : window.innerWidth - hero.width,
	y : 0
}
var enemy5 = {
	x : window.innerWidth - hero.width,
	y : 0
}

var enemy6 = {
	x : window.innerWidth - hero.width,
	y : 0
}

var enemy7 = {
	x : window.innerWidth - hero.width,
	y : 0
}

var enemy8 = {
	x : window.innerWidth - hero.width,
	y : 0
}

var enemyX = enemy.x;
var enemyX2 = enemy2.x;
var enemyX3 = enemy3.x;
var enemyX4 = enemy4.x;
var enemyX5 = enemy5.x;
var enemyX6 = enemy6.x;
var enemyX7 = enemy7.x;
var enemyX8 = enemy8.x;

var enemyYPositions = [enemy.y, enemy2.y, enemy3.y, enemy4.y]

var eBullet = {
	speed : 1500,
	x : 0,
	y : 0
}

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

	if (hero.x < enemyX + 100 && hero.x + 100 > enemyX && hero.y < enemy.y + 100 && 100 + hero.y > enemy.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX4 + 100 && hero.x + 100 > enemyX4 && hero.y < enemy4.y + 100 && 100 + hero.y > enemy4.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX3 + 100 && hero.x + 100 > enemyX3 && hero.y < enemy3.y + 100 && 100 + hero.y > enemy3.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX2 + 100 && hero.x + 100 > enemyX2 && hero.y < enemy2.y + 100 && 100 + hero.y > enemy2.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX5 + 100 && hero.x + 100 > enemyX5 && hero.y < enemy5.y + 100 && 100 + hero.y > enemy5.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX6 + 100 && hero.x + 100 > enemyX6 && hero.y < enemy6.y + 100 && 100 + hero.y > enemy6.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX7 + 100 && hero.x + 100 > enemyX7 && hero.y < enemy7.y + 100 && 100 + hero.y > enemy7.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX8 + 100 && hero.x + 100 > enemyX8 && hero.y < enemy8.y + 100 && 100 + hero.y > enemy8.y) {
		lives -= 1;
		reset();
	}

if (lives > 0 ) {
	score += 10;
}

$('div').html('SCORE<br><br>' + score);
$('#lives').html(lives + '<br><br>LIVES')

if (lives == 0) {
	alert('Your score was ' + score);
	window.location = 'gameover.html';
}

if (difficulty == 1) {
	hero.speed = 256;
	enemySpeed = 15;
	scoreIncrement = 5;
} else if (difficulty == 2) {
	hero.speed = 512;
	enemySpeed = 20;
	scoreIncrement = 15;
} else if (difficulty == 3) {
	hero.speed = 720;
	enemySpeed = 35;
	scoreIncrement = 40;
} else if (difficulty == 4) {
	hero.speed = 1200;
	enemySpeed = 43;
	scoreIncrement = 50;
}

}

// Reset Game

var reset = function() {

	enemy.y = (Math.random() * window.innerHeight)
	enemy2.y = (Math.random() * window.innerHeight)
	enemy3.y = (Math.random() * window.innerHeight)
	enemy4.y = (Math.random() * window.innerHeight)
	enemy5.y = (Math.random() * window.innerHeight)
	enemy6.y = (Math.random() * window.innerHeight)
	enemy7.y = (Math.random() * window.innerHeight)
	enemy8.y = (Math.random() * window.innerHeight)

	enemyX = enemy.x;
	enemyX2 = enemy2.x;
	enemyX3 = enemy3.x;
	enemyX4 = enemy4.x;
	enemyX5 = enemy5.x;
	enemyX6 = enemy6.x;
	enemyX7 = enemy7.x;
	enemyX8 = enemy8.x;
}

// Draw Stuff

var drawStuff = function() {

	enemyX = enemyX - enemySpeed;
	enemyX2 = enemyX2 - enemySpeed;
	enemyX3 = enemyX3 - enemySpeed;
	enemyX4 = enemyX4 - enemySpeed;
	enemyX5 = enemyX5 - enemySpeed;
	enemyX6 = enemyX6 - enemySpeed;
	enemyX7 = enemyX7 - enemySpeed;
	enemyX8 = enemyX8 - enemySpeed;
	
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, window.innerWidth, window.innerHeight);
	}

	if (heroReady) {
		ctx.drawImage(heroSprite, hero.x, hero.y, 100, 100)
	}

	if (enemyReady) {
			ctx.drawImage(enemySprite, enemyX, enemy.y, 100, 100)
			ctx.drawImage(enemy2Sprite, enemyX2, enemy2.y, 100, 100)
			ctx.drawImage(enemy3Sprite, enemyX3, enemy3.y, 100, 100)
			ctx.drawImage(enemy4Sprite, enemyX4, enemy4.y, 100, 100)
			ctx.drawImage(enemy5Sprite, enemyX5, enemy5.y, 100, 100)
			ctx.drawImage(enemy6Sprite, enemyX6, enemy6.y, 100, 100)
			ctx.drawImage(enemy7Sprite, enemyX7, enemy7.y, 100, 100)
			ctx.drawImage(enemy8Sprite, enemyX8, enemy8.y, 100, 100)
		}

	if (enemyX < 0) {
		reset();
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