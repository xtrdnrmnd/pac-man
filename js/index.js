// module import
import { OBJECT_TYPE, SOUND, POWER_PILL_TIME, GLOBAL_SPEED, gameGrid, scoreTable, startButton, musicSwitch } from './setup.js';
import { GRID } from './setup.js';

// Classes import
import PlayingField from './PlayingField.js';
import Player from './Player.js';
import Ghost from './Ghost.js';

// Initial setup
let gameBoard = null;
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;
let index = 0;



// --------------------Model--------------------- //

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

function checkCollision(pacman, ghosts) {
  const collidedGhost = ghosts.find((ghost) => pacman.pos === ghost.pos);

  if (collidedGhost) {
    if (pacman.powerPill) {
      gameBoard.removeObject(collidedGhost.pos, [
        OBJECT_TYPE.GHOST,
        OBJECT_TYPE.SCARED,
        collidedGhost.name
      ]);
      collidedGhost.pos = collidedGhost.startPos;
      score += 100;
    } else {
      gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);
      gameBoard.rotateDiv(pacman.pos, 0);

      looseLife(pacman, gameGrid);
    }
  }
}

function startGameCont() {
  gameWin = false;
  powerPillActive = false;
  score = 0;
  gameBoard = PlayingField.createGameBoard(gameGrid, GRID);

  scoreTable.classList.remove('hide');

  // Hide all the menu items
  document.getElementById("startButton").style.visibility = "hidden";
  document.getElementById("quitButton").style.visibility = "hidden";
  document.getElementById("instrButton").style.visibility = "hidden";
  document.getElementById("main-page-logo").style.visibility = "hidden";
  document.getElementById("musicButton").style.visibility = "hidden";
  document.getElementById("score-title").style.visibility = "visible";
  document.getElementById("life-title").style.visibility = "visible";

  gameBoard.createGrid(GRID);

  const pacman = new Player(1, 30);
  pacman.displayLives();
  gameBoard.addObject(30, [OBJECT_TYPE.PACMAN]);
  document.addEventListener('keydown', (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );

  const ghosts = [
    new Ghost(5, 188, OBJECT_TYPE.PINKGHOST),
    new Ghost(4, 208, OBJECT_TYPE.REDGHOST),
    new Ghost(3, 230, OBJECT_TYPE.BLUEGHOST),
    new Ghost(2, 251, OBJECT_TYPE.ORANGEGHOST)
  ];

  // Gameloop
  timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);
}





// --------------------------View----------------------- //

// Game finishes once the lives counter equals 0
function gameOver(pacman, grid) {
  document.removeEventListener('keydown', (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
  );

  gameBoard.showGameStatus(gameWin);

  clearInterval(timer);
  // Show startbutton
  document.getElementById("startButton").style.visibility = "visible";
  document.getElementById("quitButton").style.visibility = "visible";
  document.getElementById("instrButton").style.visibility = "visible";
  document.getElementById("startButton").style.position = "absolute";
  document.getElementById("startButton").style.top = "310px";
  document.getElementById("startButton").style.left = "600px";
  document.getElementById("instrButton").style.position = "absolute";
  document.getElementById("instrButton").style.top = "410px";
  document.getElementById("instrButton").style.left = "450px";
  document.getElementById("quitButton").style.position = "absolute";
  document.getElementById("quitButton").style.top = "510px";
  document.getElementById("quitButton").style.left = "620px";
  document.getElementById("musicButton").style.visibility = "visible";
  document.getElementById("musicButton").style.position = "absolute";
  document.getElementById("musicButton").style.top = "610px";
  document.getElementById("musicButton").style.left = "620px";
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
        event.x > 1145 &&
        event.x < 1145 + 50 &&
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
      window.close();
    } else {
      alert("OKAY! NICE! KEEP PLAYING :)");
    }
  });
}



// ------------------Controller------------------ //
// Start game
function startGame() {
  startButton.addEventListener('click', function (event) {
    startGameCont();
  });
}

// The whole game mechanics
function gameLoop(pacman, ghosts) {
  //  PacMan movement
  gameBoard.moveCharacter(pacman);
  checkCollision(pacman, ghosts);
  // Ghost movement
  ghosts.forEach((ghost) => gameBoard.moveCharacter(ghost));
  checkCollision(pacman, ghosts);
  //  Check if Pacman eats a dot
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.DOT)) {

    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.DOT]);
    // Remove a dot
    gameBoard.dotCount--;
    // Add Score
    score += 5;
  }
  // Check for the boost
  if (gameBoard.objectExist(pacman.pos, OBJECT_TYPE.PILL)) {

    gameBoard.removeObject(pacman.pos, [OBJECT_TYPE.PILL]);

    pacman.powerPill = true;
    score += 50;

    clearTimeout(powerPillTimer);
    powerPillTimer = setTimeout(
      () => (pacman.powerPill = false),
      POWER_PILL_TIME
    );
  }
  // 7. Change ghost scare mode depending on powerpill
  if (pacman.powerPill !== powerPillActive) {
    powerPillActive = pacman.powerPill;
    ghosts.forEach((ghost) => (ghost.isScared = pacman.powerPill));
  }
  // 8. Check if all dots have been eaten
  if (gameBoard.dotCount === 0) {
    gameWin = true;
    gameOver(pacman, gameGrid);
  }
  // 9. Show new score
  scoreTable.innerHTML = score;
}

// PacMan loses a life every time he collides with the ghost
function looseLife(pacman, grid) {
  pacman.looseLife();

  //checks if PacMan has any lives left
  console.log(pacman.getLives());
  if (pacman.getLives() == 0) {
    gameOver();
  }
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

//iniitialize
window.onload = function () {
  instrButton = document.getElementById("instrButton");
  quitButton = document.getElementById("quitButton");

  startGame();
  instructions();
  quit();
  soundSwitch();
}

