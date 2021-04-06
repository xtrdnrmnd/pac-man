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
        location.replace("./gameplay.html")
    }
});

// Highscore button text
ctx.font = '50pt Comic Sans MS';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFFF00';
ctx.fillText('INSTRUCTIONS', posX, 479);

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
        document.getElementById("instruction").style.visibility = "visible";

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
        // Opens a blank url in the current window 
        // and then closes the current window
        window.open('', '_self').close();
    }
});

var audioSong = new Audio('audio/song1.mp3');
audioSong.loop = true;

function volume() {
    document.getElementById("volume").style.visibility = "hidden";
    document.getElementById("volume2").style.visibility = "visible";
    audioSong.play();
}

function volume2() {
    document.getElementById("volume2").style.visibility = "hidden";
    document.getElementById("volume").style.visibility = "visible";
    audioSong.pause();
}


// INSTRUCTIONS CANVAS
var cont = document.getElementById('instruction').getContext('2d');

var buttonLeft = new Image();
buttonLeft.src = "Obrazky/button-left.png"
buttonLeft.onload = function () { cont.drawImage(buttonLeft, 40, 250, 100, 100); }

var buttonRight = new Image();
buttonRight.src = "Obrazky/button-right.png"
buttonRight.onload = function () { cont.drawImage(buttonRight, 500, 250, 100, 100); }

var buttonUp = new Image();
buttonUp.src = "Obrazky/button-up.png"
buttonUp.onload = function () { cont.drawImage(buttonUp, 270, 140, 100, 100); }

var buttonDown = new Image();
buttonDown.src = "Obrazky/button-down.png"
buttonDown.onload = function () { cont.drawImage(buttonDown, 270, 360, 100, 100); }

var escapeButton = new Image();
escapeButton.src = "Obrazky/escape-button.png"
escapeButton.onload = function () { cont.drawImage(escapeButton, 780, 140, 100, 100); }

var tabButton = new Image();
tabButton.src = "Obrazky/tab-button.png"
tabButton.onload = function () { cont.drawImage(tabButton, 780, 300, 100, 100); }


cont.font = '20pt Comic Sans MS';
cont.textAlign = 'center';
cont.fillStyle = '#000';

cont.fillText('Move left', 90, 240);
cont.fillText('Move right', 550, 240);
cont.fillText('Move up', 320, 265);
cont.fillText('Move down', 320, 350);

cont.fillText('Quit the game', 840, 265);
cont.fillText('Turn music on/off', 840, 425);

cont.font = '50pt Comic Sans MS';
cont.fillText('Instructions', 500, 60);