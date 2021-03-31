var canv = document.getElementById('myCanvas')
var ctx = canv.getContext('2d');

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
var pacmanx = 500;
var pacmany = 32;

var pinkGhostx = canv.width / 4 + 250;
var pinkGhosty = 390;

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

function endGame() {
    if (pacmanx <= 0 || pacmanx >= canv.width || pacmany <= 0 || pacmany >= canv.height) {
        location.replace("./gameover.html");
    }
}

function draw() {
    var canv = document.getElementById('myCanvas')
    var ctx = canv.getContext('2d');

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.drawImage(backgroundImage, canv.width / 5, 0, canv.height, canv.height);

    ctx.drawImage(pacMan, pacmanx, pacmany, ObjDim, ObjDim);

    if (rightPressed) {
        pacmanx += 5;
        endGame();
    }
    else if (leftPressed) {
        pacmanx -= 5;
        endGame();
    }
    if (downPressed) {
        pacmany += 5;
        endGame();
    }
    else if (upPressed) {
        pacmany -= 5;
        endGame();
    }

    ctx.drawImage(redGhost, xPosRedGhost, 285, ObjDim + 15, ObjDim + 15);

    if (pos > 770) {
        dir = -1;
    }
    else if (pos < 540) {
        dir = 1
    }
    pos += dir;
    xPosRedGhost = pos;

    ctx.drawImage(pinkGhost, pinkGhostx, pinkGhosty, ObjDim, ObjDim);

    ctx.drawImage(life1, 35, 15, ObjDim + 20, ObjDim + 20);
    ctx.drawImage(life2, 95, 15, ObjDim + 20, ObjDim + 20);
    ctx.drawImage(life3, 155, 15, ObjDim + 20, ObjDim + 20);

    window.requestAnimationFrame(draw); // Animation
}

init() //Calling the init
