// Using the MVC model to build the structure
import { WALLS } from './setup.js';
import { OBJECT_TYPE } from './setup.js';

//Classes import
import GameField from './playing_field.js';

// DOM elements
const gameGrid = document.querySelector("#gameField");
const scoreTable = document.querySelector("#score");
const musicSwitch = document.querySelector("#musicButton");

// Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; //ms
const gameField = GameField.createGameField(gameGrid, WALLS);
const sound = new Audio('./audio/music.mp3');
sound.loop = true;


// Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let gamePillActive = false;
let powerPillTimer = null;
let index = 0;

//Model

//function responsible for the music    
function playMusic() {
    sound.play();
    document.getElementById("musicButton").style.backgroundImage = "URL('./Obrazky/Volume/volume-on.png')";
    index = 1;
}

stop = function () {
    sound.pause();
    document.getElementById("musicButton").style.backgroundImage = "URL('./Obrazky/Volume/volume-off.png')";
    index = 0;
}


//View
// Start game
function startGame() {
    startButton.addEventListener('click', function (event) {
        gameGrid.style.visibility = "visible";
    });
}

// Instructions
instructions = function () {
    instrButton.addEventListener('click', function (event) {
        var inst = document.getElementById("instructions");
        var ctx2 = inst.getContext("2d");
        inst.style.visibility = "visible";


        var buttonLeft = new Image();
        buttonLeft.src = "./Obrazky/Instructions/button-left.png";
        buttonLeft.onload = function () { ctx2.drawImage(buttonLeft, 40, 250, 100, 100); }

        var buttonRight = new Image();
        buttonRight.src = "./Obrazky/Instructions/button-right.png"
        buttonRight.onload = function () { ctx2.drawImage(buttonRight, 500, 250, 100, 100); }

        var buttonUp = new Image();
        buttonUp.src = "./Obrazky/Instructions/button-up.png";
        buttonUp.onload = function () { ctx2.drawImage(buttonUp, 270, 140, 100, 100); }
        buttonUp.style.zIndex = 200;

        var buttonDown = new Image();
        buttonDown.src = "./Obrazky/Instructions/button-down.png"
        buttonDown.onload = function () { ctx2.drawImage(buttonDown, 270, 360, 100, 100); }

        var escapeButton = new Image();
        escapeButton.src = "./Obrazky/Instructions/escape-button.png"
        escapeButton.onload = function () { ctx2.drawImage(escapeButton, 780, 140, 100, 100); }

        var tabButton = new Image();
        tabButton.src = "./Obrazky/Instructions/tab-button.png"
        tabButton.onload = function () { ctx2.drawImage(tabButton, 780, 300, 100, 100); }


        ctx2.font = '20pt Comic Sans MS';
        ctx2.textAlign = 'center';
        ctx2.fillStyle = '#FFFF00';

        ctx2.fillText('Move left', 90, 240);
        ctx2.fillText('Move right', 550, 240);
        ctx2.fillText('Move up', 320, 265);
        ctx2.fillText('Move down', 320, 350);

        ctx2.fillText('Quit the game', 840, 265);
        ctx2.fillText('Turn music on/off', 840, 425);

        ctx2.font = '50pt Comic Sans MS';
        ctx2.fillText('Instructions', 500, 60);

        var exitInstructions = new Image();
        exitInstructions.src = "Obrazky/exitInstructions.png"
        exitInstructions.onload = function () { ctx2.drawImage(exitInstructions, 940, 15, 50, 50); }
        // Add event listener to exit Button
        document.getElementById('instructions').addEventListener('click', function (event) {
            // Control that click event occurred within position of button 
            if (
                event.x > 1130 &&
                event.x < 1130 + 50 &&
                event.y > 310 &&
                event.y < 310 + 50
            ) {
                // Executes if button was clicked!
                document.getElementById("instructions").style.visibility = "hidden";
            }
        });
    });
}

// Quit the app
function quit() {
    quitButton.addEventListener('click', function (event) {
        if (confirm('Are you sure you want to quit the game?')) {
            window.open('', '_self').close();
        } else {
            // Do nothing
        }
    });
}

//Sound switch function
function soundSwitch() {
    musicSwitch.addEventListener('click', function (event) {
        if (index == 0) {
            playMusic();
        }
        else {
            stop();
        }
    });
}


//Controller


//iniitialize
window.onload = function () {

    //startButton = document.getElementById("startButton");
    instrButton = document.getElementById("instrButton");
    quitButton = document.getElementById("quitButton");
    //musicSwitch = document.getElementById("musicButton");

    //gameGrid = document.getElementById("gameField");
    const ctx = gameGrid.getContext("2d");

    startGame();
    instructions();
    quit();
    soundSwitch();
}

