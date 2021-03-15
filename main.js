var canv = document.getElementById("myCanvas");
var ctx = canv.getContext("2d");

// Background style: fill with black color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);

// Pac-Man image logo at the top of the canvas
var imageObj = new Image();
imageObj.src = "Obrazky/main-page-logo.png"
imageObj.onload = function () { ctx.drawImage(imageObj, 159, 66, 1120, 265);}

// Start button text
var x = canv.width / 2;
ctx.font = '50pt Comic Sans MS';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFFF00';
ctx.fillText('START', x, 385);

// Highscore button text
ctx.font = '50pt Comic Sans MS';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFFF00';
ctx.fillText('HIGHSCORES', x, 479);

// Quit button text
ctx.font = '50pt Comic Sans MS';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFFF00';
ctx.fillText('QUIT', x, 479);