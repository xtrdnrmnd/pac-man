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

function draw() {
    var canv = document.getElementById('myCanvas')
    var ctx = canv.getContext('2d');

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.drawImage(backgroundImage, canv.width / 5, 0, canv.height, canv.height);

    ctx.drawImage(pacMan, canv.width / 4 - 30, 32, ObjDim, ObjDim);

    ctx.drawImage(redGhost, xPosRedGhost, 300, ObjDim + 15, ObjDim + 15);

    if (pos > 800) {
        dir = -1;
    }
    else if (pos < 540) {
        dir = 1
    }
    pos += dir;
    xPosRedGhost = pos;

    ctx.drawImage(pinkGhost, canv.width / 4 + 250, 390, ObjDim, ObjDim);
    ctx.drawImage(life1, 35, 15, ObjDim + 20, ObjDim + 20);
    ctx.drawImage(life2, 95, 15, ObjDim + 20, ObjDim + 20);
    ctx.drawImage(life3, 155, 15, ObjDim + 20, ObjDim + 20);

    window.requestAnimationFrame(draw); // Animation
}

init() //Calling the init function
