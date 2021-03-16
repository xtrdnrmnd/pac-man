// Get canvas element and it's context
var canv = document.getElementById('myCanvas')
var ctx = canv.getContext('2d');

// Background style: fill with black color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);

// Pac-Man image logo at the top of the canvas
var imageObj = new Image();
imageObj.src = "Obrazky/main-page-logo.png"
imageObj.onload = function () { ctx.drawImage(imageObj, 159, 66, 1120, 265); }

// Button position and dimensions
var buttonW = 290;
var buttonH = 80;
var buttonW2 = 470;
var buttonW3 = 220;


// Start button text
var posX = canv.width / 2;
ctx.font = '50pt Comic Sans MS';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFFF00';
ctx.fillText('START', posX, 385);


// Add event listener to canvas element
canv.addEventListener('click', function (event) {
    // Control that click event occurred within position of button
    if (
        event.x > 550 &&
        event.x < 550 + buttonW &&
        event.y > 320 &&
        event.y < 320 + buttonH
    ) {
        // Executes if button was clicked!
        alert('Button was clicked!');
    }
});

// Highscore button text
ctx.font = '50pt Comic Sans MS';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFFF00';
ctx.fillText('HIGHSCORES', posX, 479);

// Add event listener to canvas element
canv.addEventListener('click', function (event) {
    // Control that click event occurred within position of button 
    if (
        event.x > 480 &&
        event.x < 480 + buttonW2 &&
        event.y > 420 &&
        event.y < 420 + buttonH
    ) {
        // Executes if button was clicked!
        alert('Button 2 was clicked!');
    }
});

// Quit button text
ctx.font = '50pt Comic Sans MS';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFFF00';
ctx.fillText('QUIT', posX, 583);

// Add event listener to canvas element
canv.addEventListener('click', function (event) {
    // Control that click event occurred within position of button
    if (
        event.x > 610 &&
        event.x < 610 + buttonW3 &&
        event.y > 520 &&
        event.y < 520 + buttonH
    ) {
        // Executes if button was clicked!
        alert('Button 3 was clicked!');
    }
});

// Volume image
var imageVolume = new Image();
imageVolume.src = "Obrazky/volume-off.png"
imageVolume.onload = function () { ctx.drawImage(imageVolume, 642, 618, 156, 149,); }
