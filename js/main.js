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
        document.getElementById("game").style.visibility = "visible";
        document.getElementById("myCanvas").style.visibility = "hidden";
        document.getElementById("volume").style.visibility = "hidden";
        document.getElementById("volume2").style.visibility = "hidden";

        var canvGame = document.getElementById('game');
        var ctxGame = canvGame.getContext('2d');

        // CANVAS FOR THE GAME
        var canvGame = document.getElementById('game');
        var ctxGame = canvGame.getContext('2d');

        // Images
        var backgroundImage = new Image();
        var pacMan = new Image();
        var redGhost = new Image();
        var pinkGhost = new Image();
        var life1 = new Image();
        var life2 = new Image();
        var life3 = new Image();

        //Width and height of Game objects
        var ObjDim = 42;

        // Initialization function
        function init() {
            backgroundImage.src = "Obrazky/background.png"
            pacMan.src = "Obrazky/pac-man-1.png"
            redGhost.src = "Obrazky/red-ghost.png"
            pinkGhost.src = "Obrazky/pink-ghost.png"
            life1.src = "Obrazky/cherry.png"
            life2.src = "Obrazky/cherry.png"
            life3.src = "Obrazky/cherry.png"
            window.requestAnimationFrame(draw);
        }

        var dir = 1; // One move
        var pos = 540; // Start position for the Ghost
        var xPosRedGhost = 540;
        var pacmanx = 500; // Start x dimension for Pac-Man
        var pacmany = 32; // Start y dimension for Pac-Man

        var pinkGhostx = canvGame.width / 4 + 250; // x dimension for the Pink Ghost
        var pinkGhosty = 390; // y dimension for the Pink Ghost

        document.addEventListener('keydown', keyDownHandler, false);
        var rightPressed = false;
        var leftPressed = false;
        var upPressed = false;
        var downPressed = false;

        function keyDownHandler(event) {
            if (event.keyCode == 39) {
                rightPressed = true;
                leftPressed = false;
                upPressed = false;
                downPressed = false;
            }
            else if (event.keyCode == 37) {
                leftPressed = true;
                rightPressed = false;
                upPressed = false;
                downPressed = false;
            }
            if (event.keyCode == 40) {
                downPressed = true;
                rightPressed = false;
                leftPressed = false;
                upPressed = false;
            }
            else if (event.keyCode == 38) {
                upPressed = true;
                rightPressed = false;
                leftPressed = false;
                downPressed = false;
            }
        }

        // When Pac-Man reaches the end of the board, the game finishes
        function endGame() {
            if (pacmanx <= 300 || pacmanx >= (canvGame.width - 400) || pacmany <= 0 || pacmany >= canvGame.height) {
                location.replace("./gameover.html");
            }
        }

        // Function to draw elements and the move
        function draw() {
            // Setting canvas
            var canvGame = document.getElementById('game');
            var ctxGame = canvGame.getContext('2d');

            // Fill canvas with black background
            ctxGame.fillStyle = "black";
            ctxGame.fillRect(0, 0, canvGame.width, canvGame.height);

            // Adding the board
            ctxGame.drawImage(backgroundImage, canvGame.width / 5, 0, canvGame.height, canvGame.height);

            // Pac-Man character
            ctxGame.drawImage(pacMan, pacmanx, pacmany, ObjDim, ObjDim);

            //Keyboard movement
            if (rightPressed) {
                pacmanx += 2;
                endGame();
            }
            else if (leftPressed) {
                pacmanx -= 2;
                endGame();
            }
            if (downPressed) {
                pacmany += 2;
                endGame();
            }
            else if (upPressed) {
                pacmany -= 2;
                endGame();
            }

            ctxGame.drawImage(redGhost, xPosRedGhost, 285, ObjDim + 15, ObjDim + 15);

            if (pos > 770) {
                dir = -1;
            }
            else if (pos < 540) {
                dir = 1
            }
            pos += dir;
            xPosRedGhost = pos;

            ctxGame.drawImage(pinkGhost, pinkGhostx, pinkGhosty, ObjDim, ObjDim);

            ctxGame.drawImage(life1, 35, 15, ObjDim + 20, ObjDim + 20);
            ctxGame.drawImage(life2, 95, 15, ObjDim + 20, ObjDim + 20);
            ctxGame.drawImage(life3, 155, 15, ObjDim + 20, ObjDim + 20);

            window.requestAnimationFrame(draw); // Animation
        }

        init() //Calling the init
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

// Volume on
function volume() {
    document.getElementById("volume").style.visibility = "hidden";
    document.getElementById("volume2").style.visibility = "visible";
    audioSong.play();
}

// Volume off
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

var exitInstructions = new Image();
exitInstructions.src = "Obrazky/exitInstructions.png"
exitInstructions.onload = function () { cont.drawImage(exitInstructions, 940, 15, 50, 50); }
// Add event listener to exit Button
document.getElementById('instruction').addEventListener('click', function (event) {
    // Control that click event occurred within position of button 
    if (
        event.x > 1130 &&
        event.x < 1130 + 50 &&
        event.y > 310 &&
        event.y < 310 + 50
    ) {
        // Executes if button was clicked!
        document.getElementById("instruction").style.visibility = "hidden";
    }
});



