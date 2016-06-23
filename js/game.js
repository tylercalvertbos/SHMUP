$(document).ready(function() {

	// Create The Canvas

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = screen.width;
	canvas.height = screen.height;

	document.body.appendChild(canvas)


// Define Variables

var score = 0;
var lives = 5;
var keysDown = {};
var difficulty = 3;
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
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
}

var enemy2 = {
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
}

var enemy3 = {
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
}

var enemy4 = {
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
}
var enemy5 = {
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
}

var enemy6 = {
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
}

var enemy7 = {
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
}

var enemy8 = {
	x : screen.width - hero.width,
	y : 0,
	width : 100,
	height : 100
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

	if (49 in keysDown) { // Easy Mode
		difficulty = 1;
	}

	if (50 in keysDown) { // Medium Mode
		difficulty = 2;
	}

	if (51 in keysDown) { // Hard Mode
		difficulty = 3;
	}

	if (52 in keysDown) { // Insane Mode
		difficulty = 4;
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

	if (hero.x < enemyX + enemy.width && hero.x + hero.width > enemyX && hero.y < enemy.y + enemy.height && hero.height + hero.y > enemy.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX4 + enemy2.width && hero.x + hero.width > enemyX4 && hero.y < enemy4.y + enemy2.height && hero.height + hero.y > enemy4.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX3 + enemy3.width && hero.x + hero.width > enemyX3 && hero.y < enemy3.y + enemy3.height && hero.height + hero.y > enemy3.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX2 + enemy4.width && hero.x + hero.width > enemyX2 && hero.y < enemy2.y + enemy4.height && hero.height + hero.y > enemy2.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX5 + enemy5.width && hero.x + hero.width > enemyX5 && hero.y < enemy5.y + enemy5.height && hero.height + hero.y > enemy5.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX6 + enemy6.width && hero.x + hero.width > enemyX6 && hero.y < enemy6.y + enemy6.height && hero.height + hero.y > enemy6.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX7 + enemy7.width && hero.x + hero.width > enemyX7 && hero.y < enemy7.y + enemy7.height && hero.height + hero.y > enemy7.y) {
		lives -= 1;
		reset();
	}

	if (hero.x < enemyX8 + enemy8.width && hero.x + hero.width > enemyX8 && hero.y < enemy8.y + enemy8.height && hero.height + hero.y > enemy8.y) {
		lives -= 1;enemy.width
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
	hero.speed = 1200;
	enemySpeed = 35;
	scoreIncrement = 40;
} else if (difficulty == 4) {
	hero.speed = 1200;
	enemySpeed = 50;
	scoreIncrement = 50;
}

if (screen.height < 1000 && screen.width < 1500) {
	hero.width = 50;
	enemy.width = 50;
	enemy2.width = 50;
	enemy3.width = 50;
	enemy4.width = 50;
	enemy5.width = 50;
	enemy6.width = 50;
	enemy7.width = 50;
	enemy8.width = 50;

	hero.height = 50;
	enemy.height = 50;
	enemy2.height = 50;
	enemy3.height = 50;
	enemy4.height = 50;
	enemy5.height = 50;
	enemy6.height = 50;
	enemy7.height = 50;
	enemy8.height = 50;

	$('#lives').css('margin-top', '45%')
	$('div').css('font-size', '10px')
	

if (difficulty == 1) {
	hero.speed = 128;
	enemySpeed = 7.5;
	scoreIncrement = 5;
} else if (difficulty == 2) {
	hero.speed = 256;
	enemySpeed = 10;
	scoreIncrement = 15;
} else if (difficulty == 3) {
	hero.speed = 600;
	enemySpeed = 17.5;
	scoreIncrement = 40;
} else if (difficulty == 4) {
	hero.speed = 600;
	enemySpeed = 25;
	scoreIncrement = 50;
}}

}

// Reset Game

var reset = function() {

	enemy.y = (Math.random() * screen.height)
	enemy2.y = (Math.random() * screen.height)
	enemy3.y = (Math.random() * screen.height)
	enemy4.y = (Math.random() * screen.height)
	enemy5.y = (Math.random() * screen.height)
	enemy6.y = (Math.random() * screen.height)
	enemy7.y = (Math.random() * screen.height)
	enemy8.y = (Math.random() * screen.height)

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
		ctx.drawImage(bgImage, 0, 0, screen.width, screen.height);
	}

	if (heroReady) {
		ctx.drawImage(heroSprite, hero.x, hero.y, hero.width, hero.height)
	}

	if (enemyReady) {
			ctx.drawImage(enemySprite, enemyX, enemy.y, enemy.width, enemy.height)
			ctx.drawImage(enemy2Sprite, enemyX2, enemy2.y, enemy2.width, enemy2.height)
			ctx.drawImage(enemy3Sprite, enemyX3, enemy3.y, enemy3.width, enemy3.height)
			ctx.drawImage(enemy4Sprite, enemyX4, enemy4.y, enemy4.width, enemy4.height)
			ctx.drawImage(enemy5Sprite, enemyX5, enemy5.y, enemy5.width, enemy5.height)
			ctx.drawImage(enemy6Sprite, enemyX6, enemy6.y, enemy6.width, enemy6.height)
			ctx.drawImage(enemy7Sprite, enemyX7, enemy7.y, enemy7.width, enemy7.height)
			ctx.drawImage(enemy8Sprite, enemyX8, enemy8.y, enemy8.width, enemy8.height)
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