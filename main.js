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
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "#FFFF00";
        ctx.stroke();
        ctx.fillRect(400, 200, 600, 500);

        ctx.font = '50pt Comic Sans MS';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.fillText('Here is some instruction menu', 705, 360, 560);
        ctx.fillText('that u can use to put some', 705, 430, 560);
        ctx.fillText('instructions on how the ', 705, 500, 560);
        ctx.fillText('game is supposed to function', 705, 570, 560);

        ctx.beginPath();
        ctx.lineWidth = "16";
        ctx.moveTo(440 - 20, 240 - 20);
        ctx.lineTo(460 + 20, 260 + 20);

        ctx.moveTo(460 + 20, 240 - 20);
        ctx.lineTo(440 - 20, 260 + 20);
        ctx.strokeStyle = "red";
        ctx.stroke();
        canv.addEventListener('click', function (event) {
            if (
                event.x > 440 &&
                event.x < 460 + 20 &&
                event.y > 240 &&
                event.y < 260 + 200
            ) {
                ctx.clearRect(400, 200, 600, 500);
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canv.width, canv.height);
                var imageObj = new Image();
                imageObj.src = "Obrazky/main-page-logo.png"
                imageObj.onload = function () { ctx.drawImage(imageObj, 159, 66, 1120, 265); }
                var posX = canv.width / 2;
                ctx.font = '50pt Comic Sans MS';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#FFFF00';
                ctx.fillText('START', posX, 385);
                ctx.font = '50pt Comic Sans MS';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#FFFF00';
                ctx.fillText('INSTRUCTIONS', posX, 479);
                ctx.font = '50pt Comic Sans MS';
                ctx.textAlign = 'center';
                ctx.fillStyle = '#FFFF00';
                ctx.fillText('QUIT', posX, 583);
                var imageVolume = new Image();
                imageVolume.src = "Obrazky/volume-off.png"
                imageVolume.onload = function () { ctx.drawImage(imageVolume, 642, 618, 156, 149,); }
            }
        });
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
