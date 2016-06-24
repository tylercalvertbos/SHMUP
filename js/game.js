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
var enemySpeed;
var max = screen.width + 600;
var min = screen.width;

var dif = prompt('Choose Your Difficulty\n\n1 for Easy\n2 for Medium\n3 for Hard\n4 for Insane')

if (dif == 1) {
	difficulty = 1;
} else if (dif == 2) {
	difficulty = 2;
} else if (dif == 4) {
	difficulty = 4;
} else if (dif == 'wwssadadba 4') {
	difficulty = 4;
	lives = 100;
} else if (dif == 'wwssadadba') {
	difficulty = 3;
	lives = 100;
} else {
	difficulty = 3;
}
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

var enemyX = Math.random() * (max - min) + min;
var enemyX2 = Math.random() * (max - min) + min;
var enemyX3 = Math.random() * (max - min) + min;
var enemyX4 = Math.random() * (max - min) + min;
var enemyX5 = Math.random() * (max - min) + min;
var enemyX6 = Math.random() * (max - min) + min;
var enemyX7 = Math.random() * (max - min) + min;
var enemyX8 = Math.random() * (max - min) + min;

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
	if (27 in keysDown) { // Player firing
		window.location = 'index.html'
	}
	if (82 in keysDown) { // Player reloading
		location.reload();
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
		enemyX = Math.random() * (max - min) + min;
		enemy.y = (Math.random() * screen.height)
	}

	if (hero.x < enemyX2 + enemy2.width && hero.x + hero.width > enemyX2 && hero.y < enemy2.y + enemy2.height && hero.height + hero.y > enemy2.y) {
		lives -= 1;
		enemyX2 = Math.random() * (max - min) + min;
		enemy2.y = (Math.random() * screen.height)
	}

	if (hero.x < enemyX3 + enemy3.width && hero.x + hero.width > enemyX3 && hero.y < enemy3.y + enemy3.height && hero.height + hero.y > enemy3.y) {
		lives -= 1;
		enemyX3 = Math.random() * (max - min) + min;
		enemy3.y = (Math.random() * screen.height)
	}

	if (hero.x < enemyX4 + enemy4.width && hero.x + hero.width > enemyX4 && hero.y < enemy4.y + enemy4.height && hero.height + hero.y > enemy4.y) {
		lives -= 1;
		enemyX4 = Math.random() * (max - min) + min;
		enemy4.y = (Math.random() * screen.height)
	}

	if (hero.x < enemyX5 + enemy5.width && hero.x + hero.width > enemyX5 && hero.y < enemy5.y + enemy5.height && hero.height + hero.y > enemy5.y) {
		lives -= 1;
		enemyX5 = Math.random() * (max - min) + min;
		enemy5.y = (Math.random() * screen.height)
	}

	if (hero.x < enemyX6 + enemy6.width && hero.x + hero.width > enemyX6 && hero.y < enemy6.y + enemy6.height && hero.height + hero.y > enemy6.y) {
		lives -= 1;
		enemyX6 = Math.random() * (max - min) + min;
		enemy6.y = (Math.random() * screen.height)
	}

	if (hero.x < enemyX7 + enemy7.width && hero.x + hero.width > enemyX7 && hero.y < enemy7.y + enemy7.height && hero.height + hero.y > enemy7.y) {
		lives -= 1;
		enemyX7 = Math.random() * (max - min) + min;
		enemy7.y = (Math.random() * screen.height)
	}

	if (hero.x < enemyX8 + enemy8.width && hero.x + hero.width > enemyX8 && hero.y < enemy8.y + enemy8.height && hero.height + hero.y > enemy8.y) {
		lives -= 1;
		enemyX8 = Math.random() * (max - min) + min;
		enemy8.y = (Math.random() * screen.height)
	}

$('div').html('SCORE<br><br>' + score);
$('#lives').html(lives + '<br><br>LIVES')

if (lives == 0) {
	alert('Your score was ' + score);
	window.location = 'gameover.html';
}

if (difficulty == 1) {
	hero.speed = 384;
	enemySpeed = 15;
	scoreIncrement = 8;
} else if (difficulty == 2) {
	hero.speed = 512;
	enemySpeed = 20;
	scoreIncrement = 16;
} else if (difficulty == 3) {
	hero.speed = 1200;
	enemySpeed = 35;
	scoreIncrement = 33;
} else if (difficulty == 4) {
	hero.speed = 1200;
	enemySpeed = 50;
	scoreIncrement = 66;
}

if (screen.height < 1200 && screen.width < 2000) {
	
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

	$('#lives').css('margin-top', '43%')
	$('div').css('font-size', '20%px')
	

if (difficulty == 1) {
	hero.speed = 256;
	enemySpeed = 7.5;
} else if (difficulty == 2) {
	hero.speed = 384;
	enemySpeed = 10;
} else if (difficulty == 3) {
	hero.speed = 600;
	enemySpeed = 17.5;
} else if (difficulty == 4) {
	hero.speed = 600;
	enemySpeed = 25;
}}

if (lives > 0) {
	score += scoreIncrement;
}

if (40 in keysDown) { // Player pausing
	scoreIncrement = 378523434;
}


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

	enemyX = Math.random() * (max - min) + min;
	enemyX2 = Math.random() * (max - min) + min;
	enemyX3 = Math.random() * (max - min) + min;
	enemyX4 = Math.random() * (max - min) + min;
	enemyX5 = Math.random() * (max - min) + min;
	enemyX6 = Math.random() * (max - min) + min;
	enemyX7 = Math.random() * (max - min) + min;
	enemyX8 = Math.random() * (max - min) + min;
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
		enemyX = Math.random() * (max - min) + min;
		enemy.y = (Math.random() * screen.height);
	}

	if (enemyX2 < 0) {
		enemyX2 = Math.random() * (max - min) + min;
		enemy2.y = (Math.random() * screen.height);
	}

	if (enemyX3 < 0) {
		enemyX3 = Math.random() * (max - min) + min;
		enemy3.y = (Math.random() * screen.height);
	}

	if (enemyX4 < 0) {
		enemyX4 = Math.random() * (max - min) + min;
		enemy4.y = (Math.random() * screen.height);
	}

	if (enemyX5 < 0) {
		enemyX5 = Math.random() * (max - min) + min;
		enemy5.y = (Math.random() * screen.height);
	}

	if (enemyX6 < 0) {
		enemyX6 = Math.random() * (max - min) + min;
		enemy6.y = (Math.random() * screen.height);
	}

	if (enemyX7 < 0) {
		enemyX7 = Math.random() * (max - min) + min;
		enemy7.y = (Math.random() * screen.height);
	}

	if (enemyX8 < 0) {
		enemyX8 = Math.random() * (max - min) + min;
		enemy8.y = (Math.random() * screen.height);
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