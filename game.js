// Get canvas element and it's context
var canv = document.getElementById('myCanvas')
var ctx = canv.getContext('2d');

// Background style: fill with black color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);

// Background picture at the top of the canvas
var backgroundImage = new Image();
backgroundImage.src = "Obrazky/background.png"
backgroundImage.onload = function () { ctx.drawImage(backgroundImage, canv.width / 4, 0, canv.height, canv.height); }